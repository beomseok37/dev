import { ChangeEventHandler, ReactElement, ReactNode } from 'react';

import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

import { Wrapper, None } from './style';

interface props {
  checked?: boolean;
  children?: ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CheckBox = ({ checked, children, onChange }: props): ReactElement => {
  return (
    <Wrapper>
      <label>
        <None type="checkbox" checked={checked} onChange={onChange} />
        {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        <div>{checked ? '체크됨' : '체크 안됨'}</div>
      </label>
      <span>{children}</span>
    </Wrapper>
  );
};

CheckBox.defaultProps = {
  checked: false,
  children: null,
};

export default CheckBox;
