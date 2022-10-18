import { ChangeEventHandler, forwardRef, MutableRefObject } from 'react';

import { TextArea } from './style';

interface Props {
  equation: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const EditorInput = forwardRef(({ equation, onChange }: Props, ref) => {
  return (
    <TextArea
      value={equation}
      onChange={onChange}
      ref={ref as MutableRefObject<HTMLTextAreaElement>}
    />
  );
});

export default EditorInput;
