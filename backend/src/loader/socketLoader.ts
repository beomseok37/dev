import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

import { ClientToServerType, ServerToClientType, SocketUserInfoType } from 'src/types';

export default function socketLoader(app: express.Application) {
  const port = process.env.PORT || 8000;
  const server = http.createServer(app);
  const io = new Server<ClientToServerType, ServerToClientType>(server, {
    cors: {
      origin: true,
      credentials: true,
    },
  });
  const minime = io.of('/minime');
  const chat = io.of('/chat');
  const userInfo = io.of('/user-info');

  minime.on('connection', (socket) => {
    socket.on('move', (user) => {
      socket.broadcast.emit('move', user);
    });
  });

  userInfo.on('connection', (socket) => {
    socket.on('requestConnectedUserInfo', (user) => {
      socket.broadcast.emit('requestUserInfo', user);
    });
    socket.on('sendMyInfo', (user, socketID) => {
      userInfo.to(socketID).emit('responseConnectedUserInfo', user);
    });
    socket.on('changeCharacterInfo', (socketID, who, character) => {
      socket.broadcast.emit('broadcastChangedCharacterInfo', socketID, who, character);
    });
    socket.on('broadcastDisconnect', (socketID) => {
      socket.broadcast.emit('broadcastDisconnect', socketID);
    });
    socket.on('disconnect', () => {
      socket.broadcast.emit('broadcastDisconnect', socket.id);
    });
  });

  chat.on('connection', (socket) => {
    socket.on('sendMainMessage', (mainChat) => {
      socket.broadcast.emit('broadcastMainMessage', mainChat);
    });
    socket.on('sendMinimeMessage', (minimeChat) => {
      socket.broadcast.emit('broadcastMinimeMessage', minimeChat);
    });
  });

  io.listen(+port);
}
