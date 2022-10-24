import { ReactElement } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

import Minime from 'src/components/MiniMe';
import ModalCommon from 'src/components/modals/Common';

import socket from 'src/socket';

import { Button } from './style';

interface Props {
  onClose: () => void;
  onOpenSelectModal: () => void;
}

function MinimeModal({ onClose, onOpenSelectModal }: Props): ReactElement {
  const handleClose = () => {
    socket.emit('broadcastDisconnect', socket.id);
    onClose();
  };
  return (
    <ModalCommon
      width={700}
      height={700}
      justifyContent="center"
      alignItems="center"
      background="#506ea5"
      top={100}
      animation="slideDown"
      animationTiming="ease-out"
      onClose={handleClose}
    >
      <Minime onOpenSelectModal={onOpenSelectModal} />
      <Button onClick={handleClose}>
        <RiCloseCircleLine size={20} />
      </Button>
    </ModalCommon>
  );
}

export default MinimeModal;
