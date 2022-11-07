import { MouseEventHandler, ReactElement } from 'react';

import { ButtonColorType, ButtonSizeType } from 'src/types';

import { Button } from './style';

interface props {
  children: ReactElement | string;
  size?: ButtonSizeType;
  color?: ButtonColorType;
  outline?: boolean;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseMove?: MouseEventHandler<HTMLButtonElement>;
  leftMargin?: boolean;
  margin?: string;
}

function MyButton({
  children,
  size,
  color,
  outline,
  fullWidth,
  leftMargin,
  margin,
  ...rest
}: props): ReactElement {
  return (
    <Button
      type="button"
      size={size!}
      color={color!}
      outline={outline!}
      fullWidth={fullWidth!}
      leftMargin={leftMargin!}
      margin={margin!}
      aria-label="my-button"
      {...rest}
    >
      {children}
    </Button>
  );
}

MyButton.defaultProps = {
  size: 'medium',
  color: 'blue',
  outline: false,
  fullWidth: false,
  onClick: () => {},
  onMouseMove: () => {},
  leftMargin: false,
  margin: 'unset',
};

export default MyButton;
