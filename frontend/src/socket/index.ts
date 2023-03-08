import { io, Socket } from 'socket.io-client';
import { ServerToClientType, ClientToServerType } from 'src/types';

const socketURL = process.env.NEXT_PUBLIC_SOCKET_URL;

const minimeSocket: Socket<ServerToClientType, ClientToServerType> = io(
  `${socketURL}/minime`,
  {
    reconnectionDelayMax: 10000,
    withCredentials: true,
    path: '/socket.io',
    transports: ['websocket'],
    secure: true,
  }
);

const userInfoSocket: Socket<ServerToClientType, ClientToServerType> = io(
  `${socketURL}/user-info`,
  {
    reconnectionDelayMax: 10000,
    withCredentials: true,
    path: '/socket.io',
    transports: ['websocket'],
    secure: true,
  }
);

const chatSocket: Socket<ServerToClientType, ClientToServerType> = io(
  `${socketURL}/chat`,
  {
    reconnectionDelayMax: 10000,
    withCredentials: true,
    path: '/socket.io',
    transports: ['websocket'],
    secure: true,
  }
);

export { minimeSocket, userInfoSocket, chatSocket };
