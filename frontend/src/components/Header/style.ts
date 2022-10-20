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
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  height: 50px;
  padding: 10px;
`;

const Title = styled.a`
  font-size: 28px;
  &:hover {
    cursor: pointer;
  }
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
  bottom: -42px;
  left: -45px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
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
    margin-left: 34px;
    margin-top: -8px;
  }
`;

export { Wrapper, Title, Button, Balloon };
