import { ReactElement, ReactNode } from 'react';

import { Wrapper } from './style';

interface props {
  children: ReactNode;
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
}

function Row({
  children,
  width,
  height,
  justifyContent,
  alignItems,
  padding,
}: props): ReactElement {
  return (
    <Wrapper
      width={width!}
      height={height!}
      justifyContent={justifyContent!}
      alignItems={alignItems!}
      padding={padding!}
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
  padding: 'unset',
};

export default Row;
