import { ReactElement, ReactNode } from 'react';

import { Wrapper, Background } from './style';

interface Props {
  children: ReactNode;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  width: number;
  height: number;
  background?: string;
}

function ModalCommon({
  children,
  display,
  justifyContent,
  alignItems,
  flexDirection,
  width,
  height,
  background,
}: Props): ReactElement {
  return (
    <>
      <Background />
      <Wrapper
        display={display!}
        justifyContent={justifyContent!}
        alignItems={alignItems!}
        flexDirection={flexDirection!}
        width={width}
        height={height}
        background={background!}
      >
        {children}
      </Wrapper>
    </>
  );
}

ModalCommon.defaultProps = {
  display: 'flex',
  justifyContent: 'unset',
  alignItems: 'unset',
  flexDirection: 'row',
  background: '#fff',
};

export default ModalCommon;
