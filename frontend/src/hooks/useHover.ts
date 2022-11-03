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
    () => {
      const hoverRef = ref.current;
      if (hoverRef) {
        hoverRef.addEventListener('mouseover', handleMouseOver);
        hoverRef.addEventListener('mouseout', handleMouseOut);
      }
      return () => {
        if (hoverRef) {
          hoverRef.removeEventListener('mouseover', handleMouseOver);
          hoverRef.removeEventListener('mouseout', handleMouseOut);
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}

export default useHover;
