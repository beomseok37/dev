import styled from '@emotion/styled';
import { css } from '@emotion/react';

const floatAnimation = css`
  @keyframes float {
    0% {
      // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      // box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-3px);
    }
    100% {
      // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
`;

const Username = styled.p`
  background: #506ea5;
  margin-left: 20px;
`;

const FloatButton = styled.button`
  ${floatAnimation}
  width: 80px;
  height: 40px;
  border-radius: 4px;
  background: #4ec0e9;
  color: #fff;
  animation: float 3s ease-in-out infinite;
  cursor: pointer;
`;

export { Username, FloatButton };
