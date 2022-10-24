import { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import { resetCount } from 'src/redux/reducer/chat';

import ChatArea from './ChatArea';
import ChatButton from './ChatButton';
import ChatCloseButton from './ChatCloseButotn';

const Chat = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState(true);

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
    if (first) {
      setFirst(false);
    }
    dispatch(resetCount());
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(resetCount());
  };

  return (
    <>
      <ChatArea open={open} />
      {open && <ChatCloseButton handleClose={handleClose} />}
      {!open && <ChatButton handleOpen={handleOpen} first={first} />}
    </>
  );
};

export default Chat;
