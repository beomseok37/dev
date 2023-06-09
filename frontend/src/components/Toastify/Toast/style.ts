import styled from '@emotion/styled';

interface WrapperProps {
  index: number;
  isAnimating: boolean;
  position: string;
  background: string;
}

interface BarProps {
  seconds: string;
}

const Wrapper = styled.div<WrapperProps>`
  @keyframes rightStart {
    0% {
      transform: translateX(220px);
      opacity: 0.4;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes rightEnd {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(220px);
      opacity: 0.4;
    }
  }
  @keyframes leftStart {
    0% {
      transform: translateX(-220px);
      opacity: 0.4;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes leftEnd {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-220px);
      opacity: 0.4;
    }
  }
  position: absolute;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  box-sizing: border-box;

  width: 200px;
  height: 80px;

  color: #fff;
  background: ${({ background }) => background};

  border-radius: 5px;

  ${({ position, index }) =>
    `${position.split('-')[1] === 'Top' ? 'top' : 'bottom'}:${index * 90}px`};

  transition: all 1s;
  transform: translateX(
    ${({ position, isAnimating }) =>
      isAnimating
        ? '0'
        : `${position.split('-')[0] === 'Left' ? '-' : ''}220px`}
  );
  animation: ${({ position, isAnimating }) =>
    isAnimating
      ? `${position.split('-')[0] === 'Left' ? 'leftStart' : 'rightStart'} 1s`
      : `${position.split('-')[0] === 'Left' ? 'leftEnd' : 'rightEnd'} 0.3s`};
`;

const Bar = styled.div<BarProps>`
  @keyframes extend {
    0% {
      width: 0%;
      border-radius: 5px 0 0 0;
    }
    100% {
      width: 100%;
      border-radius: 5px 5px 0 0;
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  height: 7px;

  background: blue;

  animation: extend ${({ seconds }) => seconds}s linear;
`;

export { Wrapper, Bar };
