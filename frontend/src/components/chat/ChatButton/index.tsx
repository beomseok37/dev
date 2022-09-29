import { ReactElement } from 'react';
import { BsChatDotsFill } from 'react-icons/bs';

import { Wrapper } from './style';

interface Props {
  handleOpen: () => void;
  first: boolean;
}

const ChatButton = ({ handleOpen, first }: Props): ReactElement => {
  return (
    <Wrapper onClick={handleOpen} first={first}>
      <BsChatDotsFill size={30} />
    </Wrapper>
  );
};

export default ChatButton;
