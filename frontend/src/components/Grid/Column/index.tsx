import { ReactElement, ReactNode } from 'react';

import { SideBarColorType } from 'src/types';

import { Wrapper } from './style';

interface props {
  children: ReactNode;
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  transition?: boolean;
  background?: SideBarColorType;
  padding?: string;
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
};

export default Column;
