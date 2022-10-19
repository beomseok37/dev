import styled from '@emotion/styled';

interface WrapperProps {
  border: string;
  isAbsolute: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #fff;
  overflow: hidden;

  border: ${({ border }) => border};
  img {
    position: absolute;
    top: -25px;
    height: 80px;
    ${({ isAbsolute }) => isAbsolute && 'left:0px;'}
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
