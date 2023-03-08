import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import Row from 'src/components/Grid/Row';

import { selectMinimeChatList } from 'src/redux/reducer/chat';
import { userInfoSocket } from 'src/socket';

import { Wrapper, Who, Message } from './style';

interface Props {
  isOpen: boolean;
}

function ChatArea({ isOpen }: Props) {
  const chatList = useSelector(selectMinimeChatList);
  const chatListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [chatList]);

  return (
    <Wrapper ref={chatListRef} isOpen={isOpen}>
      {chatList.map((chat, index) => (
        <Row
          key={index.toString() + chat.who + chat.message}
          margin="4px 0 0 0"
        >
          {chat.socketID !== 'I am not user' && (
            <Who isOpen={isOpen} isMe={userInfoSocket.id === chat.socketID}>
              {chat.who}
            </Who>
          )}
          <Message notUser={chat.socketID === 'I am not user'}>
            {chat.message}
          </Message>
        </Row>
      ))}
    </Wrapper>
  );
}

export default ChatArea;
