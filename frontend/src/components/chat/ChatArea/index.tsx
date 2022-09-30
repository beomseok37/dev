import {
  ReactElement,
  useRef,
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import { FiSend } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';

import Input from 'src/components/base/Input';
import Row from 'src/components/Grid/Row';

import { selectChatList, chatIn } from 'src/redux/reducer/chat';
import { selectUser } from 'src/redux/reducer/user';

import socket from 'src/socket';

import { Wrapper, ChatListWrapper, Button, ChatWrapper, Chat } from './style';

interface Props {
  open: boolean;
}

const ChatArea = ({ open }: Props): ReactElement => {
  const user = useSelector(selectUser);
  const chatList = useSelector(selectChatList);
  console.log(chatList);
  const dispatch = useDispatch();
  const chatListRef = useRef<HTMLDivElement>(null);
  const [newChat, setNewChat] = useState('');

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewChat(e.currentTarget.value);
  };

  const handleClick = () => {
    if (newChat) {
      socket.emit('sendMessage', socket.id, user.username, newChat);
      dispatch(
        chatIn({ socketID: socket.id, who: user.username, message: newChat })
      );
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <Wrapper open={open}>
      <ChatListWrapper ref={chatListRef}>
        {chatList.map((chat, index) => {
          return (
            <ChatWrapper
              key={chat.message + index.toString()}
              isMine={chat.socketID === socket.id}
            >
              <Chat isMine={chat.socketID === socket.id}>{chat.message}</Chat>
            </ChatWrapper>
          );
        })}
      </ChatListWrapper>
      <Row>
        <Input width="255px" onChange={handleChange} onKeyUp={handleKeyUp} />
        <Button onClick={handleClick}>
          <FiSend size={24} />
        </Button>
      </Row>
    </Wrapper>
  );
};

export default ChatArea;
