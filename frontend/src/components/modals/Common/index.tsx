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
  top?: number;
  animation?: string;
  animationTiming?: string;
  onClose: () => void;
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
  top,
  animation,
  animationTiming,
  onClose,
}: Props): ReactElement {
  return (
    <>
      <Background onClick={onClose} />
      <Wrapper
        display={display!}
        justifyContent={justifyContent!}
        alignItems={alignItems!}
        flexDirection={flexDirection!}
        width={width}
        height={height}
        background={background!}
        top={top!}
        animation={animation!}
        animationTiming={animationTiming!}
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
  top: 200,
  animation: 'unset',
  animationTiming: 'linear',
};

export default ModalCommon;
