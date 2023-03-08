/* eslint-disable no-unused-vars */
import SocketUserInfoType from './socketUserInfoType';
import ChatType from './chat';

export default interface ClientToServerType {
  move: (user: SocketUserInfoType) => void;
  requestConnectedUserInfo: (user: SocketUserInfoType) => void;
  sendMyInfo: (user: SocketUserInfoType, socketID: string) => void;
  sendMainMessage: (mainChat: ChatType) => void;
  sendMinimeMessage: (minimeChat: ChatType) => void;
  changeCharacterInfo: (
    socketID: string,
    who: string,
    character: string
  ) => void;
  broadcastDisconnect: (socketID: string) => void;
}
