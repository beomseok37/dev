import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface WrapperProps {
  backgroundColor: string;
  hoverBackgroundColor: string;
}

const fadeInAnimation = (hoverBackgroundColor: string) => css`
  @keyframes fadeInUp${hoverBackgroundColor.slice(1)} {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      background: ${hoverBackgroundColor};
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
  }
`;

const Wrapper = styled.a<WrapperProps>`
  ${({ hoverBackgroundColor }) => fadeInAnimation(hoverBackgroundColor)}
  position:relative;
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${({ backgroundColor }) => backgroundColor};
  &:hover {
    animation: ${({ hoverBackgroundColor }) =>
        `fadeInUp${hoverBackgroundColor.slice(1)}`}
      1s;
    background: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    cursor: pointer;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
