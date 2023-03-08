import SocketUserInfoType from './socketUserInfo';
import chatType from './chat';
export default interface ServerToClientType {
  move: (user: SocketUserInfoType) => void;
  requestUserInfo: (requestUser: SocketUserInfoType) => void;
  responseConnectedUserInfo: (connectedUser: SocketUserInfoType) => void;
  broadcastDisconnect: (socketID: string) => void;
  broadcastMainMessage: (mainChat: chatType) => void;
  broadcastMinimeMessage: (minimeChat: chatType) => void;
  broadcastChangedCharacterInfo: (socketID: string, who: string, character: string) => void;
}
