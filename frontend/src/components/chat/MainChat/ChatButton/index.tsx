import { ReactElement } from 'react';
import { BsChatDotsFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import { selectNewWholeChatCount } from 'src/redux/reducer/chat';

import { Wrapper, Count } from './style';

interface Props {
  handleOpen: () => void;
  first: boolean;
}

function ChatButton({ handleOpen, first }: Props): ReactElement {
  const newChatCount = useSelector(selectNewWholeChatCount);

  return (
    <Wrapper
      onClick={handleOpen}
      first={first}
      aria-label="전체 채팅 open 버튼"
    >
      <BsChatDotsFill size={30} />
      {newChatCount !== 0 && <Count>{newChatCount}</Count>}
    </Wrapper>
  );
}

export default ChatButton;
