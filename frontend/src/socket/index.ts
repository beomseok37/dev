import { io, Socket } from 'socket.io-client';
import { DIRECTION } from 'src/constant/miniMe';
import { ServerToClientType, ClientToServerType } from 'src/types';

const socket: Socket<ServerToClientType, ClientToServerType> = io(
  'http://localhost:8000',
  {
    reconnectionDelayMax: 10000,
    withCredentials: true,
  }
);

socket.on('connect', () => {
  socket.emit('requestConnectedUserInfo', {
    socketID: socket.id,
    username: 'me',
    x: 250,
    y: 250,
    character: '/image/character1.png',
    currentLoopIndex: DIRECTION.FRONT,
    currentDirection: 0,
  });
});

export default socket;
