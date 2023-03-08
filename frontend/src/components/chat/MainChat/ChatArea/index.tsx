import {
  ReactElement,
  useRef,
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Row from 'src/components/Grid/Row';
import CharacterImage from 'src/components/CharacterImage';
import Column from 'src/components/Grid/Column';

import { selectMainChatList, mainChatIn } from 'src/redux/reducer/chat';
import { selectUser } from 'src/redux/reducer/user';

import { chatSocket, userInfoSocket } from 'src/socket';

import {
  Wrapper,
  ChatListWrapper,
  Button,
  ButtonWrapper,
  ChatWrapper,
  Chat,
  Who,
  Time,
  TextArea,
} from './style';

interface Props {
  open: boolean;
}

function ChatArea({ open }: Props): ReactElement {
  const user = useSelector(selectUser);
  const chatList = useSelector(selectMainChatList);
  const dispatch = useDispatch();
  const chatListRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLTextAreaElement>(null);

  const [newChat, setNewChat] = useState('');
  const [shift, setShift] = useState(false);

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

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (shift || e.currentTarget.value !== '\n') {
      setNewChat(e.currentTarget.value);
    }
  };

  const handleClick = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const hourMinute = `${hour.toString().length === 1 ? `0${hour}` : hour}:${
      minute.toString().length === 1 ? `0${minute}` : minute
    }`;

    if (
      /[ㄱ-ㅎ|가-힣|ㅏ-ㅣ|a-z|A-Z|0-9|`|~|!|?|@|#|$|%|^|&|*|(|)|-|_|=|+|\s]+/.test(
        newChat
      )
    ) {
      const newMessage = {
        socketID: userInfoSocket.id,
        who: user.username,
        message: newChat,
        character: user.character,
        time: hourMinute,
      };
      chatSocket.emit('sendMainMessage', newMessage);
      dispatch(mainChatIn(newMessage));
      setNewChat('');
      handleFocus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Shift') {
      setShift(true);
    }
    if (!shift && e.key === 'Enter' && !e.nativeEvent.isComposing) {
      handleClick();
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Shift') {
      setShift(false);
    }
  };

  return (
    <Wrapper open={open}>
      <ChatListWrapper ref={chatListRef}>
        {chatList.map((chat, index) => {
          const isMine = chat.socketID === userInfoSocket.id;
          const checkSameUser =
            index === 0
              ? false
              : chatList[index - 1].socketID === chat.socketID;
          const lastChat =
            index === chatList.length - 1 ||
            (index !== chatList.length - 1 &&
              chatList[index + 1].time !== chat.time) ||
            chatList[index + 1].socketID !== chat.socketID;
          return (
            <ChatWrapper key={chat.message + index.toString()} isMine={isMine}>
              {checkSameUser || isMine ? (
                <Chat isMine={isMine} checkSameUser={checkSameUser}>
                  {chat.message}
                  {lastChat && <Time isMine={isMine}>{chat.time}</Time>}
                </Chat>
              ) : (
                <Row>
                  <CharacterImage character={chat.character!} />
                  <Column>
                    <Who>{chat.who}</Who>
                    <Row>
                      <Chat isMine={isMine}>
                        {chat.message}
                        {lastChat && <Time isMine={isMine}>{chat.time}</Time>}
                      </Chat>
                    </Row>
                  </Column>
                </Row>
              )}
            </ChatWrapper>
          );
        })}
      </ChatListWrapper>
      <Row background="#fff">
        <TextArea
          value={newChat}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          ref={chatInputRef}
          aria-label="텍스트 입력창"
        />
        <ButtonWrapper>
          <Button onClick={handleClick} isInputEmpty={newChat === ''}>
            전송
          </Button>
        </ButtonWrapper>
      </Row>
    </Wrapper>
  );
}

export default ChatArea;
