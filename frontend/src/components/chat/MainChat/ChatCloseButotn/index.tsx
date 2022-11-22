import { ReactElement } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import { Wrapper } from './style';

interface Props {
  handleClose: () => void;
}

function ChatCloseButton({ handleClose }: Props): ReactElement {
  return (
    <Wrapper onClick={handleClose} aria-label="전체 채팅 close 버튼">
      <BsFillArrowRightCircleFill size={30} />
    </Wrapper>
  );
}

export default ChatCloseButton;
