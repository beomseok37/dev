/* eslint-disable no-unused-vars */
import SocketUserInfoType from './socketUserInfoType';
import ChatType from './chat';

export default interface ServerToClientType {
  move: (socketUserInfo: SocketUserInfoType) => void;
  requestUserInfo: (requestUser: SocketUserInfoType) => void;
  responseConnectedUserInfo: (connectedUser: SocketUserInfoType) => void;
  broadcastDisconnect: (socketID: string) => void;
  broadcastMainMessage: (mainChat: ChatType) => void;
  broadcastMinimeMessage: (minimeChat: ChatType) => void;
  broadcastChangedCharacterInfo: (
    socketID: string,
    who: string,
    character: string
  ) => void;
}
