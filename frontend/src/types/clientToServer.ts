/* eslint-disable no-unused-vars */
import SocketUserInfoType from './socketUserInfo';

export default interface ClientToServerType {
  move: (user: SocketUserInfoType) => void;
  requestConnectedUserInfo: (user: SocketUserInfoType) => void;
  sendMyInfo: (user: SocketUserInfoType, socketID: string) => void;
  sendMessage: (
    socketID: string,
    who: string,
    message: string,
    character: string,
    time: string
  ) => void;
  changeCharacterInfo: (
    socketID: string,
    who: string,
    character: string
  ) => void;
  broadcastDisconnect: (socketID: string) => void;
}
