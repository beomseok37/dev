import {
  ReactElement,
  useRef,
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useCallback,
} from 'react';
import { FiSend } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';

import Input from 'src/components/base/Input';
import Row from 'src/components/Grid/Row';
import CharacterImage from 'src/components/CharacterImage';
import Column from 'src/components/Grid/Column';

import { selectChatList, chatIn } from 'src/redux/reducer/chat';
import { selectUser } from 'src/redux/reducer/user';

import socket from 'src/socket';

import {
  Wrapper,
  ChatListWrapper,
  Button,
  ChatWrapper,
  Chat,
  Who,
} from './style';

interface Props {
  open: boolean;
}

const ChatArea = ({ open }: Props): ReactElement => {
  const user = useSelector(selectUser);
  const chatList = useSelector(selectChatList);
  const dispatch = useDispatch();
  const chatListRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLInputElement>(null);

  const [newChat, setNewChat] = useState('');

  const handleFocus = useCallback(() => {
    if (chatInputRef.current) {
      chatInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [chatList]);

  useEffect(() => {
    if (open) {
      handleFocus();
    }
  }, [open, handleFocus]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewChat(e.currentTarget.value);
  };

  const handleClick = () => {
    if (newChat) {
      socket.emit(
        'sendMessage',
        socket.id,
        user.username,
        newChat,
        user.character
      );
      dispatch(
        chatIn({
          socketID: socket.id,
          who: user.username,
          message: newChat,
          character: user.character,
        })
      );
      setNewChat('');
      handleFocus();
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
          const isMine = chat.socketID === socket.id;
          const checkSameUser =
            index === 0
              ? false
              : chatList[index - 1].socketID === chat.socketID;
          return (
            <ChatWrapper key={chat.message + index.toString()} isMine={isMine}>
              {checkSameUser || isMine ? (
                <Chat isMine={isMine} checkSameUser={checkSameUser}>
                  {chat.message}
                </Chat>
              ) : (
                <Row>
                  <CharacterImage character={chat.character} />
                  <Column>
                    <Who>{chat.who}</Who>
                    <Chat isMine={isMine}>{chat.message}</Chat>
                  </Column>
                </Row>
              )}
            </ChatWrapper>
          );
        })}
      </ChatListWrapper>
      <Row>
        <Input
          width="355px"
          value={newChat}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          ref={chatInputRef}
        />
        <Button onClick={handleClick}>
          <FiSend size={24} />
        </Button>
      </Row>
    </Wrapper>
  );
};

export default ChatArea;
