import styled from '@emotion/styled';

interface ChatTextAreaProps {
  isOpen: boolean;
}

const ChatTextArea = styled.input<ChatTextAreaProps>`
  width: ${({ isOpen }) => (isOpen ? '100%' : '40%')};
  height: 30px;
  padding: 4px 10px;
  font-size: 16px;

  background: ${({ isOpen }) => (isOpen ? '#fff' : 'transparent')};

  border: none;
  border-radius: 25px;

  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  color: ${({ isOpen }) => (isOpen ? '#222' : '#888')};
  &::placeholder {
    color: ${({ isOpen }) => (isOpen ? '#222' : '#888')};
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { ChatTextArea };
