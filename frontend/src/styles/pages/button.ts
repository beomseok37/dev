import styled from '@emotion/styled';
import { css } from '@emotion/react';

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
`;

export { ButtonGroup, FloatButton };
