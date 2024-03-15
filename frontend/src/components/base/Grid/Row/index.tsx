import { ReactElement, ReactNode } from 'react';

import { Wrapper } from './style';

interface props {
  children: ReactNode;
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  background?: string;
  margin?: string;
  padding?: string;
  position?: string;
  onClick?: () => void;
  border?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
}

function Row({
  children,
  width,
  height,
  justifyContent,
  alignItems,
  background,
  margin,
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
      padding={padding!}
      margin={margin!}
      background={background!}
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

Row.defaultProps = {
  width: 'unset',
  height: 'unset',
  justifyContent: 'unset',
  alignItems: 'unset',
  margin: 'unset',
  padding: 'unset',
  background: 'unset',
  position: 'unset',
  onClick: () => {},
  border: 'unset',
  borderLeft: 'unset',
  borderRight: 'unset',
  borderTop: 'unset',
  borderBottom: 'unset',
};

export default Row;
