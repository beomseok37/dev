import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface WrapperProps {
  display: string;
  justifyContent: string;
  alignItems: string;
  flexDirection: string;
  width: number;
  height: number;
  background: string;
}

const slideDownAnimation = css`
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-300px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Wrapper = styled.div<WrapperProps>`
  ${slideDownAnimation}
  animation: slideDown 0.5s;
  animation-timing-function: ease-out;

  position: fixed;
  z-index: 2;
  margin: 0 auto;
  top: 200px;
  left: 0;
  right: 0;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background: ${({ background }) => background};
`;

const Background = styled.div`
  position: fixed;
  z-index: 1;
  inset: 0;
  background: #888;
  opacity: 0.8;
`;

export { Wrapper, Background };
