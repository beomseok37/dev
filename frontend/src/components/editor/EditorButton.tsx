import { ReactElement } from 'react';
import Button from 'src/components/base/Button';

interface Props {
  children: string;
  onClick: () => void;
}

function EditorButton({ children, onClick }: Props): ReactElement {
  return <Button onClick={onClick}>{children}</Button>;
}

export default EditorButton;
