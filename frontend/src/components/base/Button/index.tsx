import React, { MouseEventHandler } from 'react';

import { ButtonColorType, ButtonSizeType } from 'src/types';

import { Button } from './style';

interface props {
  children: React.ReactElement | string;
  size?: ButtonSizeType;
  color?: ButtonColorType;
  outline?: boolean;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseMove?: MouseEventHandler<HTMLButtonElement>;
}

const MyButton = ({
  children,
  size,
  color,
  outline,
  fullWidth,
  ...rest
}: props): React.ReactElement => {
  return (
    <Button
      type="button"
      size={size!}
      color={color!}
      outline={outline!}
      fullWidth={fullWidth!}
      aria-label="my-button"
      {...rest}
    >
      {children}
    </Button>
  );
};

MyButton.defaultProps = {
  size: 'medium',
  color: 'blue',
  outline: false,
  fullWidth: false,
  onClick: () => {},
  onMouseMove: () => {},
};

export default MyButton;
