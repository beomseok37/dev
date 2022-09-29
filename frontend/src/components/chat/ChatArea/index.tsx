import { ReactElement } from 'react';

import { Wrapper } from './style';

interface Props {
  open: boolean;
}

const ChatArea = ({ open }: Props): ReactElement => {
  return <Wrapper open={open}>ChatArea</Wrapper>;
};

export default ChatArea;
