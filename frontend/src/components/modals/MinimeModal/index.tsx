import { ReactElement } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

import Minime from 'src/components/MiniMe';
import ModalCommon from '../Common';

import { Button } from './style';

interface Props {
  onClose: () => void;
  onOpenSelectModal: () => void;
}

function MinimeModal({ onClose, onOpenSelectModal }: Props): ReactElement {
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
      onClose={onClose}
    >
      <Minime onOpenSelectModal={onOpenSelectModal} />
      <Button onClick={onClose}>
        <RiCloseCircleLine size={20} />
      </Button>
    </ModalCommon>
  );
}

export default MinimeModal;
