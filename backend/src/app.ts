import express from 'express';
import dotenv from 'dotenv';
import http from 'http';

import { Server } from 'socket.io';

import { ClientToServerType, ServerToClientType, SocketUserInfoType } from './types';

dotenv.config();

const port = process.env.PORT || 8000;
const server = http.createServer(express());
const io = new Server<ClientToServerType, ServerToClientType>(server, {
  cors: {
    origin: true,
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log('connection', socket.id);
  socket.on('move', (user: SocketUserInfoType) => {
    socket.broadcast.emit('move', user);
  });
  socket.on('requestConnectedUserInfo', (user) => {
    console.log('fromClientRequest', user.socketID);
    socket.broadcast.emit('requestUserInfo', user);
  });
  socket.on('sendMyInfo', (user, socketID) => {
    console.log('fromClientResponse', socketID);
    io.to(socketID).emit('responseConnectedUserInfo', user);
  });
  socket.on('changeCharacter', (socketID, character) => {
    console.log('characterChange', socketID);
    socket.broadcast.emit('changeCharacter', socketID, character);
  });
  socket.on('changeUsername', (socketID, username) => {
    console.log('changeUsername', socketID);
    socket.broadcast.emit('changeUsername', socketID, username);
  });
  socket.on('disconnect', () => {
    console.log('disconnect');
    socket.broadcast.emit('broadcastDisconnect', socket.id);
  });
});

io.listen(+port);
