import styled from '@emotion/styled';
import { css } from '@emotion/react';

const animationMoema1 = css`
  @-webkit-keyframes anim-moema-1 {
    60% {
      -webkit-transform: scale3d(0.8, 0.8, 1);
      transform: scale3d(0.8, 0.8, 1);
    }
    85% {
      -webkit-transform: scale3d(1.1, 1.1, 1);
      transform: scale3d(1.1, 1.1, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes anim-moema-1 {
    60% {
      -webkit-transform: scale3d(0.8, 0.8, 1);
      transform: scale3d(0.8, 0.8, 1);
    }
    85% {
      -webkit-transform: scale3d(1.1, 1.1, 1);
      transform: scale3d(1.1, 1.1, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
`;

const animationMoema2 = css`
  @-webkit-keyframes anim-moema-2 {
    to {
      opacity: 0;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes anim-moema-2 {
    to {
      opacity: 0;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
`;

const floatAnimation = css`
  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-10px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FloatButton = styled.button`
  ${floatAnimation}
  margin-top: 20px;
  width: 120px;
  height: 50px;
  border-radius: 24px;
  background: #495057;
  color: #fff;
  animation: float 3s ease-in-out infinite;
  cursor: pointer;
`;

const RotateButton = styled.button`
  width: 130px;
  height: 40px;
  -webkit-perspective: 230px;
  perspective: 230px;
  background: transparent;
  cursor: pointer;
  span {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 40px;

    border-radius: 5px;
    background: #85d0c6;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  span:nth-child(1) {
    // box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    //   7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;

    -webkit-transform: rotateX(90deg);
    -moz-transform: rotateX(90deg);
    transform: rotateX(90deg);
    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
  }
  span:nth-child(2) {
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);

    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);

    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
  }
  &:hover span:nth-child(1) {
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);

    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  &:hover span:nth-child(2) {
    // box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    //   7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);

    -webkit-transform: rotateX(-90deg);
    -moz-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }
`;

const Scale3dButton = styled.button`
  ${animationMoema1}
  ${animationMoema2}
  width: 200px;
  height: 30px;
  border: 1px solid #eceff1;
  border-radius: 35px;
  cursor: pointer;

  &:hover {
    color: #eceff1;
    background-color: #7986cb;

    -webkit-transition: background-color 0.1s 0.3s, color 0.1s 0.3s;
    transition: background-color 0.1s 0.3s, color 0.1s 0.3s;

    background-color: #3f51b5;

    -webkit-animation: anim-moema-1 0.3s forwards;
    animation: anim-moema-1 0.3s forwards;
  }
  &:hover::before {
    -webkit-animation: anim-moema-2 0.3s 0.3s forwards;
    animation: anim-moema-2 0.3s 0.3s forwards;
  }
`;

export { ButtonGroup, FloatButton, RotateButton, Scale3dButton };
