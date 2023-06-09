import Toast from 'src/components/Toastify/Toast';

import { ToastifyPositionType, ToastType } from 'src/types';

import { Wrapper } from './style';

interface Props {
  position: ToastifyPositionType;
  background: string;
  seconds: string;
  toastList: ToastType[];
  removeToast: () => void;
}
function Toastify({
  position,
  background,
  seconds,
  toastList,
  removeToast,
}: Props) {
  return (
    <Wrapper position={position}>
      {toastList.map(({ content, key }, index) => (
        <Toast
          key={key}
          content={content}
          index={index}
          removeToast={() => removeToast()}
          position={position}
          background={background}
          seconds={seconds}
        />
      ))}
    </Wrapper>
  );
}

export default Toastify;
