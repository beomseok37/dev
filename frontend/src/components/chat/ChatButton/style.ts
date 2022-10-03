import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface Props {
  first: boolean;
}

const moveAnimation = css`
  @keyframes moveRight {
    from {
      transform: translateX(-310px);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const Wrapper = styled.button<Props>`
  ${moveAnimation}
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 100px;
  right: 100px;
  color: #0087bf;
  width: 45px;
  height: 45px;
  border: 2px solid #0087bf;
  border-radius: 25px;

  ${({ first }) => !first && `animation: moveRight 1s`};
  &:hover {
    cursor: pointer;
  }
`;

const Count = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  width: 12px;
  height: 12px;
  padding: 2px;
  background: red;
  color: #fff;
  font-size: 12px;
  border-radius: 12px;
`;

export { Wrapper, Count };
