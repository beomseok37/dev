import { ChangeEventHandler, forwardRef, MutableRefObject } from 'react';

import { TextArea } from './style';

interface Props {
  userInput: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const EditorInput = forwardRef(({ userInput, onChange }: Props, ref) => {
  return (
    <TextArea
      value={userInput}
      onChange={onChange}
      ref={ref as MutableRefObject<HTMLTextAreaElement>}
      aria-label="수식 입력 창"
    />
  );
});

export default EditorInput;
