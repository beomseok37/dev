import { ReactElement, useState } from 'react';

import ChatArea from './ChatArea';
import ChatButton from './ChatButton';
import ChatCloseButton from './ChatCloseButotn';

const Chat = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState(true);

  const handleOpen = () => {
    setOpen(true);
    if (first) {
      setFirst(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ChatArea open={open} />
      {!open && <ChatButton handleOpen={handleOpen} first={first} />}
      {open && <ChatCloseButton handleClose={handleClose} />}
    </>
  );
};

export default Chat;
