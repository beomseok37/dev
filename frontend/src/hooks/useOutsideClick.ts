import { useEffect, useRef, useState } from 'react';

function useOutsideClick() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !(ref.current as Element).contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return { ref, isOpen, setIsOpen };
}

export default useOutsideClick;
