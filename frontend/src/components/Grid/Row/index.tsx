import { ReactElement, ReactNode } from 'react';

import { Wrapper } from './style';

interface props {
  children: ReactNode;
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  transition?: boolean;
  background?: string;
  padding?: string;
  position?: string;
  onClick?: () => void;
}

function Row({
  children,
  width,
  height,
  justifyContent,
  alignItems,
  transition,
  background,
  padding,
  position,
  onClick,
}: props): ReactElement {
  return (
    <Wrapper
      width={width!}
      height={height!}
      justifyContent={justifyContent!}
      alignItems={alignItems!}
      transition={transition!}
      padding={padding!}
      background={background!}
      position={position!}
      onClick={onClick!}
    >
      {children}
    </Wrapper>
  );
}

Row.defaultProps = {
  width: 'unset',
  height: 'unset',
  justifyContent: 'unset',
  alignItems: 'unset',
  transition: false,
  padding: 'unset',
  background: 'unset',
  position: 'unset',
  onClick: () => {},
};

export default Row;
