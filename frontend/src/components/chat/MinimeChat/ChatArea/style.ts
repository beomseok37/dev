import styled from '@emotion/styled';

interface IsOpenProps {
  isOpen: boolean;
}

interface WhoProps extends IsOpenProps {
  isMe: boolean;
}

interface NotUserProps {
  notUser: boolean;
}

const Wrapper = styled.div<IsOpenProps>`
  max-height: 120px;

  color: ${({ isOpen }) => (isOpen ? '#222' : '#888')};

  overflow-y: auto;
  &::-webkit-scrollbar {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ isOpen }) => (isOpen ? '#888' : 'transparent')};
    border-radius: 10px;
  }

  ${({ isOpen }) =>
    !isOpen &&
    `
  position:absolute;
  bottom:30px;
  `}
`;

const Who = styled.p<WhoProps>`
  color: ${({ isOpen, isMe }) =>
    isOpen ? (isMe ? '#FFEB46' : '#4AB34A') : '#888'};
  margin-right: 10px;
`;

const Message = styled.p<NotUserProps>`
  color: ${({ notUser }) => (notUser ? '#1478FF' : '#222')};
`;

export { Wrapper, Who, Message };
