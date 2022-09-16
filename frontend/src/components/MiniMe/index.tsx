import { ReactElement, useEffect, useRef } from 'react';
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

import { ArrowDirection } from 'src/types';

import { Wrapper, CanvasWrapper } from './style';

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

// const userInfo = (
//   socketId,
//   userId,
//   x,
//   y,
//   src,
//   currentLoopIndex,
//   currentDirection
// ) => {
//   return { socketId, userId, x, y, src, currentLoopIndex, currentDirection };
// };

function MiniMe(): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const position: any = {};
  const draw: any = {};
  const keyPress: any = {};

  position.x = 250;
  position.y = 250;
  position.currentDirection = DIRECTION.FRONT;
  position.currentLoopIndex = 0;

  draw.canvas = null;
  draw.ctx = null;
  draw.frameCount = 0;
  draw.character = null;

  function keyDownHandler(e: KeyboardEvent) {
    keyPress[e.key] = true;
  }
  const keyUpHandler = (e: KeyboardEvent) => {
    keyPress[e.key] = false;
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
      // socket.emit(
      //   'move',
      //   userInfo(
      //     socket.id,
      //     user,
      //     x,
      //     y,
      //     charSrc,
      //     currentLoopIndex,
      //     currentDirection
      //   )
      // );
    } else {
      position.currentLoopIndex = 0;
    }

    // objects.forEach((object) => {
    //   const newObject = new Image();
    //   newObject.src = object.src;
    //   ctx.drawImage(newObject, object.x, object.y);
    // });

    draw.ctx.fillStyle = '#111';
    // users.forEach((user) => {
    //   const otherCharacter = new Image();
    //   otherCharacter.src = user.src;
    //   drawFrame(
    //     otherCharacter,
    //     calculateSX(user.currentDirection, user.currentLoopIndex),
    //     SRC_POSITION.Y,
    //     user.x,
    //     user.y,
    //     user.userId
    //   );
    // });

    draw.ctx.fillStyle = '#FFF';
    drawFrame(
      draw.character!,
      calculateSX(position.currentDirection, position.currentLoopIndex),
      SRC_POSITION.Y,
      position.x,
      position.y,
      'me'
    );
    window.requestAnimationFrame(moveLoop);
  };

  useEffect(() => {
    draw.canvas = canvasRef.current;
    draw.canvas.width = 576;
    draw.canvas.height = 562;
    draw.ctx = draw.canvas.getContext('2d');
    draw.ctx.textAlign = 'center';
    // character.src = '/image/character.png';
    draw.ctx.font = 'bold';
    draw.character = document.createElement('img');
    draw.character.setAttribute('src', '/image/character1.png');

    draw.character.onload = () => {
      window.requestAnimationFrame(moveLoop);
    };
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <CanvasWrapper>
        <canvas ref={canvasRef}>minime</canvas>;
      </CanvasWrapper>
    </Wrapper>
  );
}

export default MiniMe;
