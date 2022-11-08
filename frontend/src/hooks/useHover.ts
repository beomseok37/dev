import { MutableRefObject, useEffect, useRef, useState } from 'react';

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
    [ref.current]
  );
  return [ref, value];
}

export default useHover;
