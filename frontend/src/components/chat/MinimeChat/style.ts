import styled from '@emotion/styled';

interface WrapperProps {
  isOpen: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  bottom: 40px;
  padding: 4px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 576px;
  height: ${({ isOpen }) => (isOpen ? '150px' : '50px')};

  overflow: hidden;

  ${({ isOpen }) => isOpen && 'background: rgba(150, 150, 150, 0.5)'};
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
