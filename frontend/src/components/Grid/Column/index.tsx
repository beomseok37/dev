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
  border?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
}

function Column({
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
  border,
  borderLeft,
  borderRight,
  borderTop,
  borderBottom,
}: props): ReactElement {
  return (
    <Wrapper
      width={width!}
      height={height!}
      justifyContent={justifyContent!}
      alignItems={alignItems!}
      transition={transition!}
      background={background!}
      padding={padding!}
      position={position!}
      onClick={onClick!}
      border={border!}
      borderLeft={borderLeft!}
      borderRight={borderRight!}
      borderTop={borderTop!}
      borderBottom={borderBottom!}
    >
      {children}
    </Wrapper>
  );
}

Column.defaultProps = {
  width: 'unset',
  height: 'unset',
  justifyContent: 'unset',
  alignItems: 'unset',
  transition: false,
  background: 'unset',
  padding: 'unset',
  position: 'unset',
  onClick: () => {},
  border: 'unset',
  borderLeft: 'unset',
  borderRight: 'unset',
  borderTop: 'unset',
  borderBottom: 'unset',
};

export default Column;
