// Hook
// T - could be any type of HTML element like: HTMLDivElement, HTMLParagraphElement and etc.

import { MutableRefObject, useEffect, useRef, useState } from 'react';

// hook returns tuple(array) with type [any, boolean]
function useHover<T>(): [MutableRefObject<T>, boolean] {
  const [value, setValue] = useState<boolean>(false);
  const ref: any = useRef<T | null>(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(
    // eslint-disable-next-line consistent-return
    () => {
      if (ref.current) {
        ref.current.addEventListener('mouseover', handleMouseOver);
        ref.current.addEventListener('mouseout', handleMouseOut);
      }
      return () => {
        if (ref.current) {
          ref.current.removeEventListener('mouseover', handleMouseOver);
          ref.current.removeEventListener('mouseout', handleMouseOut);
        }
      };
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}

export default useHover;
