import {
  InputHTMLAttributes,
  forwardRef,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { chatSocket, userInfoSocket } from 'src/socket';

import { minimeChatIn } from 'src/redux/reducer/chat';
import { selectUser } from 'src/redux/reducer/user';

import { ChatTextArea } from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isOpen: boolean;
}

const ChatInput = forwardRef<HTMLInputElement, Props>(function Input(
  { isOpen, ...props },
  ref
) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [message, setMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleEnterKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Enter' || e.nativeEvent.isComposing || !message) {
      return;
    }
    const newMessage = {
      socketID: userInfoSocket.id,
      who: user.username,
      message,
    };

    chatSocket.emit('sendMinimeMessage', newMessage);
    dispatch(minimeChatIn(newMessage));
    setMessage('');
  };

  return (
    <ChatTextArea
      ref={ref}
      isOpen={isOpen}
      onChange={handleChange}
      onKeyDown={handleEnterKeyDown}
      value={message}
      placeholder="메시지를 입력하세요"
      {...props}
    />
  );
});

export default ChatInput;
