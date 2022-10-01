import { InputHTMLAttributes, forwardRef, MutableRefObject } from 'react';

import { StyledInput } from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  placeholder?: string;
}

const Input = forwardRef(
  ({ width, placeholder, onChange, onKeyUp, value }: Props, ref) => {
    return (
      <StyledInput
        type="text"
        width={width!}
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={onKeyUp}
        value={value!}
        ref={ref as MutableRefObject<HTMLInputElement>}
      />
    );
  }
);

Input.defaultProps = {
  width: '100px',
  placeholder: '입력하세요',
};

export default Input;
