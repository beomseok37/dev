import Toast from 'src/components/Toastify/Toast';

import { Wrapper } from './style';

interface Props {
  toastList: string[];
  // eslint-disable-next-line no-unused-vars
  removeToast: (deleteToast: string) => void;
}
function Toastify({ toastList, removeToast }: Props) {
  return (
    <Wrapper>
      {toastList.map((value, index) => (
        <Toast
          key={value}
          value={value}
          index={index}
          removeToast={() => removeToast(value)}
        />
      ))}
    </Wrapper>
  );
}

export default Toastify;
