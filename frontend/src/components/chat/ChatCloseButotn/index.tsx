import { ReactElement } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import { Wrapper } from './style';

interface Props {
  handleClose: () => void;
}

const ChatCloseButton = ({ handleClose }: Props): ReactElement => {
  return (
    <Wrapper onClick={handleClose}>
      <BsFillArrowRightCircleFill size={30} />
    </Wrapper>
  );
};

export default ChatCloseButton;
