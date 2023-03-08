import styled from '@emotion/styled';

import { css } from '@emotion/react';

const moveAnimation = css`
  @keyframes moveLeft {
    from {
      transform: translateX(310px);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const Wrapper = styled.button`
  ${moveAnimation}
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 100px;
  right: 410px;
  color: #0087bf;
  width: 45px;
  height: 45px;
  border: 2px solid #0087bf;
  border-radius: 25px;

  animation: moveLeft 1s;
  &:hover {
    cursor: pointer;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
