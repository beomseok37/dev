import { ReactElement, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import useOutsideClick from 'src/hooks/useOutsideClick';

import { chatSocket } from 'src/socket';

import { minimeChatIn } from 'src/redux/reducer/chat';

import ChatArea from './ChatArea';
import ChatInput from './ChatInput';
import { Wrapper } from './style';

function MinimeChat(): ReactElement {
  const dispatch = useDispatch();
  const { ref: wrapperRef, isOpen, setIsOpen } = useOutsideClick();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (isOpen) {
      return;
    }
    setIsOpen(true);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (document.activeElement === inputRef.current) {
      if (inputRef.current && e.key === 'Escape') {
        setIsOpen(false);
        document.getElementsByTagName('canvas')[0].focus();
      }
      return;
    }

    if (inputRef.current && e.key === 'Enter') {
      setIsOpen(true);
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    chatSocket.on('broadcastMinimeMessage', ({ socketID, who, message }) => {
      dispatch(minimeChatIn({ who, message, socketID }));
    });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      chatSocket.off('broadcastMinimeMessage');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper isOpen={isOpen} ref={wrapperRef}>
      <ChatArea isOpen={isOpen} />
      <ChatInput ref={inputRef} isOpen={isOpen} onFocus={handleFocus} />
    </Wrapper>
  );
}

export default MinimeChat;
