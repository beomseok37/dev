import { AnimationEvent, useState } from 'react';
import { IoCloseCircleOutline, IoRocket } from 'react-icons/io5';

import Row from 'src/components/Grid/Row';
import { Wrapper, Bar } from './style';

interface Props {
  index: number;
  removeToast: () => void;
  position: string;
  background: string;
  seconds: string;
  content: string;
}
function Toast({
  index,
  removeToast,
  position,
  background,
  seconds,
  content,
}: Props) {
  const [isAnimating, setIsAnimating] = useState(true);

  const handleWholeAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (position.split('-')[0] === 'Left' && e.animationName === 'leftEnd') {
      removeToast();
    }
    if (position.split('-')[0] === 'Right' && e.animationName === 'rightEnd') {
      removeToast();
    }
  };

  return (
    <Wrapper
      index={index}
      isAnimating={isAnimating}
      onAnimationEnd={handleWholeAnimationEnd}
      position={position}
      background={background}
    >
      <Bar
        onAnimationEnd={() => {
          setIsAnimating(false);
        }}
        seconds={seconds}
      />
      <Row>
        <IoRocket color="#fff" style={{ marginRight: '10px' }} />
        {content}
      </Row>
      <IoCloseCircleOutline
        color="#fff"
        onClick={removeToast}
        style={{ cursor: 'pointer' }}
      />
    </Wrapper>
  );
}

export default Toast;
