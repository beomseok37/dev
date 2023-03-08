import SocketUserInfoType from './socketUserInfo';
import chatType from './chat';
export default interface ClientToServerType {
  move: (user: SocketUserInfoType) => void;
  requestConnectedUserInfo: (user: SocketUserInfoType) => void;
  sendMyInfo: (user: SocketUserInfoType, socketID: string) => void;
  sendMainMessage: (mainChat: chatType) => void;
  sendMinimeMessage: (minimeChat: chatType) => void;
  changeCharacterInfo: (socketID: string, who: string, character: string) => void;
  broadcastDisconnect: (socketID: string) => void;
}
