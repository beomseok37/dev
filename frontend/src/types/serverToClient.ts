/* eslint-disable no-unused-vars */
import SocketUserInfoType from './socketUserInfo';

export default interface ServerToClientType {
  move: (socketUserInfo: SocketUserInfoType) => void;
  requestUserInfo: (requestUser: SocketUserInfoType) => void;
  responseConnectedUserInfo: (connectedUser: SocketUserInfoType) => void;
  broadcastDisconnect: (socketID: string) => void;
  broadcastMessage: (socketID: string, who: string, message: string) => void;
  broadcastChangeUsername: (socketID: string, who: string) => void;
}
