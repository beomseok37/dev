import { AnimationEvent, useState } from 'react';
import { IoCloseCircleOutline, IoRocket } from 'react-icons/io5';

import Row from 'src/components/Grid/Row';
import { Wrapper, Bar } from './style';

interface Props {
  value: string;
  index: number;
  removeToast: () => void;
}
function Toast({ value, index, removeToast }: Props) {
  const [isAnimating, setIsAnimating] = useState(true);

  const handleWholeAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === 'moveRight') {
      removeToast();
    }
  };

  return (
    <Wrapper
      index={index}
      isAnimating={isAnimating}
      onAnimationEnd={handleWholeAnimationEnd}
    >
      <Bar
        onAnimationEnd={() => {
          setIsAnimating(false);
        }}
      />
      <Row>
        <IoRocket color="#fff" style={{ marginRight: '10px' }} />
        {value}
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
