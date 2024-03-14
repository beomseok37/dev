import { useEffect, useRef } from 'react';

interface Props {
  callback: () => void;
}

function useIntersectionObserver({ callback }: Props) {
  const target = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (target.current) {
      observer.observe(target.current);
    }
  }, []);

  return { target };
}

export default useIntersectionObserver;
