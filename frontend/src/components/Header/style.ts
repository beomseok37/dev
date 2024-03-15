import styled from '@emotion/styled';
import { css } from '@emotion/react';

const slideLeftAnimation = css`
  @keyframes slideLeft {
    from {
      transform: translateX(45px);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  width: calc(99% - 300px);
  height: 50px;
  padding: 10px 10px 0 10px;

  background: white;
  border-bottom: 1px solid #ddd;
  box-shadow: 10px 0px 10px #aaa;
  z-index: 2;
`;

const Title = styled.p`
  font-size: 28px;
`;

const Button = styled.button`
  position: relative;
  background: transparent;
  cursor: pointer;
`;

const Balloon = styled.div`
  ${slideLeftAnimation}
  animation: slideLeft 0.5s;
  position: absolute;
  bottom: -45px;
  left: -45px;
  width: 80px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  border: 2px solid #000;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    border: 8px solid transparent;
    border-bottom-color: #000;
    border-top: 0;
    margin-left: 47px;
    margin-top: -8px;
  }
`;

export { Wrapper, Title, Button, Balloon };
