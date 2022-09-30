import SocketUserInfoType from './socketUserInfo';

export default interface ServerToClientType {
  move: (user: SocketUserInfoType) => void;
  requestUserInfo: (requestUser: SocketUserInfoType) => void;
  responseConnectedUserInfo: (connectedUser: SocketUserInfoType) => void;
  broadcastDisconnect: (socketID: string) => void;
}
