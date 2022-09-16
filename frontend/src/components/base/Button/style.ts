import styled from '@emotion/styled';

import { setButtonColor, setSize } from 'src/styles/utils/botton';

import { ButtonSizeType, ButtonColorType } from 'src/types';

interface props {
  size: ButtonSizeType;
  color: ButtonColorType;
  outline: boolean;
  fullWidth: boolean;
}

const Button = styled.button<props>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  outline: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  width: 60px;
  height: 2.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;

  ${({ fullWidth }) =>
    fullWidth &&
    `
  width: 100%;
  justify-content: center;
  margin-left: 0;
  margin-top: 1rem;
  `}

  ${({ size }) => {
    if (size === 'large') {
      return setSize('3rem', '1rem', '1rem', '1.25rem');
    }
    if (size === 'medium') {
      return setSize('2.25rem', '1rem', '1rem', '1rem');
    }
    return setSize('1.75rem', '1rem', '1rem', '0.875rem');
  }}
  ${({ color, outline }) => setButtonColor(color, outline)}

  &:hover {
    background: lighten($blue, 10%);
  }

  &:active {
    background: darken($blue, 10%);
  }

  margin-left: 1rem;

  box-shadow: 1px 1px 1px 1px #0d5594;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Button };
