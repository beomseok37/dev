import SocketUserInfoType from './socketUserInfo';

export default interface ServerToClientType {
  move: (user: SocketUserInfoType) => void;
  requestUserInfo: (requestUser: SocketUserInfoType) => void;
  responseConnectedUserInfo: (connectedUser: SocketUserInfoType) => void;
  broadcastDisconnect: (socketID: string) => void;
  broadcastMessage: (
    socketID: string,
    who: string,
    message: string,
    character: string,
    time: string,
  ) => void;
  broadcastChangedCharacterInfo: (socketID: string, who: string, character: string) => void;
}
