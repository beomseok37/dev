import styled from '@emotion/styled';

import { buttonColor } from 'src/constant/buttonColor';

interface ButtonProps {
  big?: boolean;
}

const Count = styled.p`
  font-size: 36px;
`;

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ big }) =>
    big
      ? `width:80px;
      height:40px;`
      : `width: 24px;
  height: 24px;`}
  padding: 4px;
  margin-right: 30px;
  border-radius: 4px;
  background: ${buttonColor.blue};
  color: white;

  box-shadow: 1px 1px 1px 1px #0d5594;
  &:hover {
    cursor: pointer;
  }
  &:active {
    // box-shadow: 1px 1px 1px 1px #0d5594 inset;
    box-shadow: none;
  }
`;

const Input = styled.input`
  margin-right: 20px;
`;

Button.defaultProps = {
  big: false,
};

export { Count, Button, Input };
