import { io, Socket } from 'socket.io-client';
import { DIRECTION } from 'src/constant/miniMe';
import { ServerToClientType, ClientToServerType } from 'src/types';

const socketURL = process.env.NEXT_PUBLIC_SOCKET_URL;

const socket: Socket<ServerToClientType, ClientToServerType> = io(socketURL, {
  reconnectionDelayMax: 10000,
  withCredentials: true,
  path: '/socket.io',
  transports: ['websocket'],
  secure: true,
});

socket.connect();

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
