import styled from '@emotion/styled';
import { css } from '@emotion/react';

const jittery = css`
  @keyframes jittery {
    5%,
    50% {
      transform: scale(1);
    }

    10% {
      transform: scale(0.9);
    }

    15% {
      transform: scale(1.15);
    }

    20% {
      transform: scale(1.15) rotate(-5deg);
    }

    25% {
      transform: scale(1.15) rotate(5deg);
    }

    30% {
      transform: scale(1.15) rotate(-3deg);
    }

    35% {
      transform: scale(1.15) rotate(2deg);
    }

    40% {
      transform: scale(1.15) rotate(0);
    }
  }
`;

const P = styled.p`
  font-size: 50px;
  color: hsl(215, 13%, 70%);
`;

const Button = styled.button`
  ${jittery}
  width: 100px;
  height: 40px;
  background: hsl(214, 79%, 65%);
  color: #fff;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;

  animation: jittery 3s infinite;

  &:hover {
    transform: scale(1.1);
  }
`;

export { P, Button };
