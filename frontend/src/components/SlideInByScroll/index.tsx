import { ReactNode, useCallback, useState } from 'react';

import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import SlideInWhenDetected from './style';

interface Props {
  children: ReactNode;
}

function SlideInByScroll({ children }: Props) {
  const [isDetected, setIsDetected] = useState(false);

  const callback = useCallback(() => {
    if (!isDetected) {
      setIsDetected(true);
    }
  }, [isDetected]);

  const { target } = useIntersectionObserver({ callback });

  return (
    <SlideInWhenDetected isDetected={isDetected} ref={target}>
      {children}
    </SlideInWhenDetected>
  );
}

export default SlideInByScroll;
