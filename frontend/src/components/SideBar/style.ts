import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Anchor = styled.button`
  width: 100%;
  height: 50px;
  -webkit-perspective: 230px;
  perspective: 300px;
  background: transparent;
  cursor: pointer;
  span {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;

    border-radius: 5px;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    background: #fff;
  }
  span:nth-of-type(1) {
    -webkit-transform: rotateX(90deg);
    -moz-transform: rotateX(90deg);
    transform: rotateX(90deg);
    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
  }
  span:nth-of-type(2) {
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);

    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
  }
  &:hover span:nth-of-type(1) {
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);

    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  &:hover span:nth-of-type(2) {
    -webkit-transform: rotateX(-90deg);
    -moz-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background: #fff;
  overflow: hidden;
  margin-top: 10px;
`;

const HorizontalLine = styled.hr`
  position: relative;
  width: 200px;
  border: thin solid #ddd;
`;

const BlogTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

const BlackBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 20px;
  background: #000;
`;

const waveAnimation = css`
  @keyframes wave {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }
`;

const IconWrapper = styled.div`
  ${waveAnimation}
  &:hover {
    animation: wave 1s infinite linear;
  }
`;

const Wrapper = styled.div`
  z-index: 2;
  position: fixed;
  left: 0;
  border-right: 1px solid #ddd;
  box-shadow: 0px 0px 10px #aaa;
  width: 300px;
  height: 100%;
  transition: all ease 0.8s;
`;

export {
  Wrapper,
  Anchor,
  ImageWrapper,
  HorizontalLine,
  BlogTitle,
  BlackBackground,
  IconWrapper,
};
