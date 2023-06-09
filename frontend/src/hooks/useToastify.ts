import { useRef, useState } from 'react';

import { ToastType } from 'src/types';

function useToastify() {
  const toastRef = useRef(1);
  const [toastList, setToastList] = useState<ToastType[]>([]);

  const addToast = (content: string) => {
    setToastList([...toastList, { content, key: toastRef.current }]);
    toastRef.current += 1;
  };

  const removeToast = () => {
    setToastList(toastList.slice(1));
  };

  return { toastList, addToast, removeToast };
}

export default useToastify;
