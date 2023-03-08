import { ReactElement } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

import Minime from 'src/components/MiniMe';
import ModalCommon from 'src/components/modals/Common';

import { userInfoSocket } from 'src/socket';

import { Button } from './style';

interface Props {
  onClose: () => void;
  onOpenSelectModal: () => void;
}

function MinimeModal({ onClose, onOpenSelectModal }: Props): ReactElement {
  const handleClose = () => {
    userInfoSocket.emit('broadcastDisconnect', userInfoSocket.id);
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
      onClose={() => {}}
    >
      <Minime onOpenSelectModal={onOpenSelectModal} />
      <Button onClick={handleClose} aria-label="미니미 모달 제거 버튼">
        <RiCloseCircleLine size={26} />
      </Button>
    </ModalCommon>
  );
}

export default MinimeModal;
