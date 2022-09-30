/* eslint-disable no-unused-vars */
import SocketUserInfoType from './socketUserInfo';

export default interface ClientToServerType {
  move: (user: SocketUserInfoType) => void;
  requestConnectedUserInfo: (user: SocketUserInfoType) => void;
  sendMyInfo: (user: SocketUserInfoType, socketID: string) => void;
}
