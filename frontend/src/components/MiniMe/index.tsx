import { ReactElement, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ArrowDirection, SocketUserInfoType } from 'src/types';

import Column from 'src/components/Grid/Column';
import CharacterSetModal from 'src/components/CharacterSetModal';

import {
  DIRECTION,
  DIRECTION_TERM,
  SRC_POSITION,
  MOVEMENT_SPEED,
  SRC_SIZE,
  CHARACTER,
  FRAME_LIMIT,
  CYCLE_LOOP,
} from 'src/constant/miniMe';

import socket from 'src/socket';

import { selectUser } from 'src/redux/reducer/user';
import { changeUserInfoInChat, chatIn } from 'src/redux/reducer/chat';

import { CanvasWrapper, Button } from './style';

// const chooseBuildDirection = (x: number, y: number, direction: number) => {
//   if (direction === DIRECTION.FRONT) {
//     return { x, y: y + 50 };
//   }
//   if (direction === DIRECTION.RIGHT) {
//     return { x: x + 35, y };
//   }
//   if (direction === DIRECTION.LEFT) {
//     return { x: x - 20, y };
//   }
//   return { x, y: y - 20 };
// };

const possibleToMove = (direction: ArrowDirection, x: number, y: number) => {
  if (direction === 'ArrowLeft') {
    return !(x < 5);
  }
  if (direction === 'ArrowRight') {
    return !(x > 542);
  }
  if (direction === 'ArrowUp') {
    return !(y < 10);
  }
  return !(y > 512);
};

const calculateSX = (currentDirection: number, currentLoopIndex: number) => {
  return (
    (currentDirection * DIRECTION_TERM + currentLoopIndex) * SRC_POSITION.X
  );
};

const makeSocketUserInfo = (
  socketID: string,
  username: string,
  x: number,
  y: number,
  character: string,
  currentLoopIndex: number,
  currentDirection: number
) => {
  return {
    socketID,
    username,
    x,
    y,
    character,
    currentLoopIndex,
    currentDirection,
  };
};

// const makeUserInitializationByUsername = (
//   user: SocketUserInfoType,
//   username: string
// ) => {
//   return {
//     ...user,
//     username,
//   };
// };

// const makeUserInitializationByCharacter = (
//   user: SocketUserInfoType,
//   character: string
// ) => {
//   return {
//     ...user,
//     character,
//   };
// };

function MiniMe(): ReactElement {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSelected, setIsSelected] = useState(false);

  const position: any = {};
  const draw: any = {};
  const keyPress: any = {};
  const connectedUsers: SocketUserInfoType[] = [];

  position.x = 250;
  position.y = 250;
  position.currentDirection = DIRECTION.FRONT;
  position.currentLoopIndex = 0;

  draw.canvas = null;
  draw.ctx = null;
  draw.frameCount = 0;
  draw.character = null;

  const keyDownHandler = (e: KeyboardEvent) => {
    if (document.activeElement?.tagName !== 'INPUT') {
      keyPress[e.key] = true;
    }
  };
  const keyUpHandler = (e: KeyboardEvent) => {
    if (document.activeElement?.tagName !== 'INPUT') {
      keyPress[e.key] = false;
    }
  };

  const drawFrame = (
    image: HTMLImageElement,
    sX: number,
    sY: number,
    cX: number,
    cY: number,
    userId: string
  ) => {
    draw.ctx.drawImage(
      image,
      sX,
      sY,
      SRC_SIZE.WIDTH,
      SRC_SIZE.HEIGHT,
      cX,
      cY,
      CHARACTER.WIDTH,
      CHARACTER.HEIGHT
    );
    draw.ctx.fillText(userId, cX + 14, cY);
  };

  const moveLoop = () => {
    draw.ctx.clearRect(0, 0, draw.canvas.width, draw.canvas.height);

    let hasMoved = true;

    if (keyPress.ArrowLeft) {
      position.currentDirection = DIRECTION.LEFT;
      if (possibleToMove('ArrowLeft', position.x, position.y)) {
        position.x -= MOVEMENT_SPEED;
      }
    } else if (keyPress.ArrowRight) {
      position.currentDirection = DIRECTION.RIGHT;
      if (possibleToMove('ArrowRight', position.x, position.y)) {
        position.x += MOVEMENT_SPEED;
      }
    } else if (keyPress.ArrowUp) {
      position.currentDirection = DIRECTION.BACK;
      if (possibleToMove('ArrowUp', position.x, position.y)) {
        position.y -= MOVEMENT_SPEED;
      }
    } else if (keyPress.ArrowDown) {
      position.currentDirection = DIRECTION.FRONT;
      if (possibleToMove('ArrowDown', position.x, position.y)) {
        position.y += MOVEMENT_SPEED;
      }
    } else {
      hasMoved = false;
    }

    if (hasMoved) {
      draw.frameCount += 1;
      if (draw.frameCount >= FRAME_LIMIT) {
        draw.frameCount = 0;
        position.currentLoopIndex += 1;
        if (position.currentLoopIndex >= CYCLE_LOOP.length - 1) {
          position.currentLoopIndex = 0;
        }
      }
      socket.emit(
        'move',
        makeSocketUserInfo(
          socket.id,
          user.username,
          position.x,
          position.y,
          user.character,
          position.currentLoopIndex,
          position.currentDirection
        )
      );
    } else {
      position.currentLoopIndex = 0;
    }

    // objects.forEach((object) => {
    //   const newObject = new Image();
    //   newObject.src = object.src;
    //   ctx.drawImage(newObject, object.x, object.y);
    // });

    draw.ctx.fillStyle = '#41A541';
    connectedUsers.forEach((otherUser) => {
      const otherCharacter = document.createElement('img');
      otherCharacter.src = otherUser.character;
      drawFrame(
        otherCharacter,
        calculateSX(otherUser.currentDirection, otherUser.currentLoopIndex),
        SRC_POSITION.Y,
        otherUser.x,
        otherUser.y,
        otherUser.username
      );
    });

    draw.ctx.fillStyle = '#FFEB46';
    drawFrame(
      draw.character,
      calculateSX(position.currentDirection, position.currentLoopIndex),
      SRC_POSITION.Y,
      position.x,
      position.y,
      user.username
    );
    window.requestAnimationFrame(moveLoop);
  };

  const initDraw = () => {
    draw.canvas = canvasRef.current;
    draw.canvas.width = 576;
    draw.canvas.height = 562;
    draw.ctx = draw.canvas.getContext('2d');
    draw.ctx.textAlign = 'center';
    draw.ctx.font = 'bold';
    draw.character = document.createElement('img');
    draw.character.src = user.character;

    draw.character.onload = () => {
      window.requestAnimationFrame(moveLoop);
    };
  };

  const checkIndex = (socketID: string) => {
    let userIndex = connectedUsers.length;
    Array(connectedUsers.length)
      .fill('')
      .forEach((sth, index) => {
        if (connectedUsers[index].socketID === socketID) {
          userIndex = index;
        }
      });
    return userIndex;
  };

  const addWindowEventListener = () => {
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);
  };

  const removeWindowEventListener = () => {
    window.removeEventListener('keydown', keyDownHandler);
    window.removeEventListener('keyup', keyUpHandler);
  };

  useEffect(() => {
    if (isSelected) {
      initDraw();
      addWindowEventListener();

      socket.emit('requestConnectedUserInfo', {
        socketID: socket.id,
        username: user.username,
        x: 250,
        y: 250,
        character: user.character,
        currentLoopIndex: DIRECTION.FRONT,
        currentDirection: 0,
      });

      socket.on('requestUserInfo', (requestUser) => {
        socket.emit(
          'sendMyInfo',
          makeSocketUserInfo(
            socket.id,
            user.username,
            position.x,
            position.y,
            user.character,
            position.currentLoopIndex,
            position.currentDirection
          ),
          requestUser.socketID
        );
        const index = checkIndex(requestUser.socketID);
        if (index === connectedUsers.length) {
          connectedUsers.push(requestUser);
        } else {
          connectedUsers[index] = requestUser;
        }
      });

      socket.on('responseConnectedUserInfo', (connectedUser) => {
        connectedUsers.push(connectedUser);
      });

      socket.on('move', (socketUserInfo) => {
        connectedUsers[checkIndex(socketUserInfo.socketID)] = socketUserInfo;
      });

      socket.on('broadcastDisconnect', (socketID) => {
        let userIndex = 0;
        Array(connectedUsers.length)
          .fill('')
          .forEach((sth, index) => {
            if (connectedUsers[index].socketID === socketID) {
              userIndex = index;
            }
          });
        connectedUsers.splice(userIndex, 1);
      });

      socket.on('broadcastMessage', (socketID, who, message, character) => {
        dispatch(chatIn({ who, message, socketID, character }));
      });

      socket.on('broadcastChangedCharacterInfo', (socketID, who, character) => {
        dispatch(changeUserInfoInChat({ socketID, who, character }));
      });
    }
    return () => {
      removeWindowEventListener();
      socket.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected]);

  const handleSave = () => {
    setIsSelected(true);
  };

  const handleOpenSelectModal = () => {
    setIsSelected(false);
  };

  return isSelected ? (
    <Column width="700px" alignItems="center" padding="40px">
      <CanvasWrapper>
        <canvas ref={canvasRef} tabIndex={0} />
      </CanvasWrapper>
      <Button onClick={handleOpenSelectModal}>change avatar</Button>
    </Column>
  ) : (
    <CharacterSetModal handleSave={handleSave} />
  );
}

export default MiniMe;
