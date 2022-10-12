import styled from '@emotion/styled';
import { css } from '@emotion/react';

const fadeInAnimation = css`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      background: #c4d1ff;
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
  }
`;

const Wrapper = styled.a`
  ${fadeInAnimation}
  position:relative;
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background: #c4f0ff;

  &:hover {
    animation: fadeInUp 1s;
    background: #c4d1ff;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    cursor: pointer;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
