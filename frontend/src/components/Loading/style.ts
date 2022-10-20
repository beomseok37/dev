import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface WrapperProps {
  isCenter: boolean;
}

const RotateAnimation = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Loader = styled.div<WrapperProps>`
  ${({ isCenter }) =>
    isCenter &&
    `
      position: fixed;
      inset: 0;
      margin: auto;
    `}
  width: 50px;
  height: 50px;
  border: 7px solid #888;
  border-radius: 50px;
  border-top-color: #666;
  animation: ${RotateAnimation} 1s linear infinite;
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper, Loader };
