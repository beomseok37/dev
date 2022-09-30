import { io, Socket } from 'socket.io-client';
import { ServerToClientType, ClientToServerType } from 'src/types';

const socketURL = process.env.NEXT_PUBLIC_SOCKET_URL;

const socket: Socket<ServerToClientType, ClientToServerType> = io(socketURL, {
  reconnectionDelayMax: 10000,
  withCredentials: true,
  path: '/socket.io',
  transports: ['websocket'],
  secure: true,
});

export default socket;
