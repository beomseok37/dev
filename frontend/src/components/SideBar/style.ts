import styled from '@emotion/styled';
import { css } from '@emotion/react';

// const Anchor1 = styled.button`
//   width: 100%;
//   padding: 1rem;
//   color: ${({ theme }) => theme.fontColors.sideBar};
//   background: ${({ theme }) => theme.backgroundColors.sideBar};
//   font-size: 20px;

//   &:hover {
//     cursor: pointer;
//     color: ${({ theme }) => theme.fontColors.sideBarHover};
//     background: ${({ theme }) => theme.backgroundColors.sideBarButtonHover};
//   }
//   &:active {
//     box-shadow: 1px 1px 1px 1px ${SIDE_BAR_BUTTON_BOX_SHADOW_COLOR} inset;
//   }
// `;

// const Anchor2 = styled.button`
//   width: 100%;
//   height: 50px;
//   -webkit-perspective: 230px;
//   perspective: 300px;
//   background: transparent;
//   cursor: pointer;
//   span {
//     display: flex;
//     position: absolute;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 50px;

//     border-radius: 5px;
//     // background: #0087bf;

//     -webkit-box-sizing: border-box;
//     -moz-box-sizing: border-box;
//     box-sizing: border-box;

//     -webkit-transition: all 0.3s;
//     transition: all 0.3s;
//   }
//   span:nth-child(1) {
//     // box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
//     //   7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;

//     -webkit-transform: rotateX(90deg);
//     -moz-transform: rotateX(90deg);
//     transform: rotateX(90deg);
//     -webkit-transform-origin: 50% 50% -20px;
//     -moz-transform-origin: 50% 50% -20px;
//     transform-origin: 50% 50% -20px;
//   }
//   span:nth-child(2) {
//     // box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
//     //   7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);

//     -webkit-transform: rotateX(0deg);
//     -moz-transform: rotateX(0deg);
//     transform: rotateX(0deg);

//     -webkit-transform-origin: 50% 50% -20px;
//     -moz-transform-origin: 50% 50% -20px;
//     transform-origin: 50% 50% -20px;
//   }
//   &:hover span:nth-child(1) {
//     box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
//       7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);

//     -webkit-transform: rotateX(0deg);
//     -moz-transform: rotateX(0deg);
//     transform: rotateX(0deg);
//   }
//   &:hover span:nth-child(2) {
//     // box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
//     //   7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);

//     -webkit-transform: rotateX(-90deg);
//     -moz-transform: rotateX(-90deg);
//     transform: rotateX(-90deg);
//   }
// `;
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

const AnchorWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Anchor = styled.a`
  ${animationMoema1}
  ${animationMoema2}

  width: 240px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  color: #444;
  &:hover {
    color: #95b6cf;
    background-color: #d6e6f5;

    -webkit-transition: background-color 0.1s 0.3s, color 0.1s 0.3s;
    transition: background-color ease 0.1s 0.3s, color 0.1s 0.3s;

    -webkit-animation: anim-moema-1 0.3s forwards;
    animation: anim-moema-1 0.3s forwards;
  }

  &:hover::before {
    -webkit-animation: anim-moema-2 0.3s 0.3s forwards;
    animation: anim-moema-2 0.3s 0.3s forwards;
  }
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background: #fff;
  overflow: hidden;
`;

const HorizontalLine = styled.hr`
  width: 200px;
  border: thin solid #ddd;
`;

export { Anchor, AnchorWrapper, ImageWrapper, HorizontalLine };
