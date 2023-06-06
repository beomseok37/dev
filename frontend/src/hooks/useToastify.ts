import { useRef, useState } from 'react';

function useToastify() {
  const toastCount = useRef(0);
  const [toastList, setToastList] = useState<string[]>([]);

  const addToast = () => {
    setToastList([...toastList, `alarm${toastCount.current.toString()}`]);
    toastCount.current += 1;
  };

  const removeToast = (deleteToast: string) => {
    setToastList(toastList.filter((toast) => toast !== deleteToast));
  };

  return { toastList, addToast, removeToast };
}

export default useToastify;
