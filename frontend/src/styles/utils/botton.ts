import { css } from '@emotion/react';

import { buttonColor } from 'src/constant/buttonColor';

import { ButtonColorType } from 'src/types';

const setButtonColor = (color: ButtonColorType, outline: boolean) => css`
  background: ${buttonColor[color]};
  &:hover {
    background: lighten(${color}, 10%);
  }
  &:active {
    background: darken(${color}, 10%);
  }
  ${outline &&
  `
    color: ${color};
    background: none;
    border: 1px solid ${color};
    &:hover {
      background: ${color};
      color: white;
    }
    margin-left: 14px;
  
  `}
`;

const setSize = (
  height: string,
  paddingLeft: string,
  paddingRight: string,
  fontSize: string
) => css`
  height: ${height};
  padding-left: ${paddingLeft};
  padding-right: ${paddingRight};
  font-size: ${fontSize};
`;

export { setButtonColor, setSize };
