import SocketUserInfoType from './socketUserInfo';

export default interface ServerToClientType {
  move: (user: SocketUserInfoType) => void;
  changeCharacter: (socketID: string, character: string) => void;
  changeUsername: (socketID: string, username: string) => void;
  requestUserInfo: (requestUser: SocketUserInfoType) => void;
  responseConnectedUserInfo: (connectedUser: SocketUserInfoType) => void;
  broadcastDisconnect: (socketID: string) => void;
}
