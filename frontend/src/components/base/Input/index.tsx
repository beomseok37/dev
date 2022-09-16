import { ReactElement, InputHTMLAttributes } from 'react';

import { StyledInput } from './style';

interface props extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  placeholder?: string;
}

function Input({ width, placeholder, onChange, value }: props): ReactElement {
  return (
    <StyledInput
      type="text"
      width={width!}
      placeholder={placeholder}
      onChange={onChange}
      value={value!}
    />
  );
}

Input.defaultProps = {
  width: '100px',
  placeholder: '입력하세요',
};

export default Input;
