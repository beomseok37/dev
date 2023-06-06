import styled from '@emotion/styled';

interface WrapperProps {
  index: number;
  isAnimating: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  @keyframes moveLeft {
    0% {
      transform: translateX(220px);
      opacity: 0.4;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes moveRight {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(220px);
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
  background: #228be6;

  border-radius: 5px;

  bottom: ${({ index }) => `${index * 90}px`};
  transition: all 1s;
  transform: translateX(${({ isAnimating }) => (isAnimating ? '0' : '220px')});
  animation: ${({ isAnimating }) =>
    isAnimating ? 'moveLeft 1s' : 'moveRight 0.3s'};
`;

const Bar = styled.div`
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

  animation: extend 3s linear;
`;

export { Wrapper, Bar };
