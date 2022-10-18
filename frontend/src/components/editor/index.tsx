import { ChangeEvent, ReactElement, useRef, useState } from 'react';
import { MathComponent } from 'mathjax-react';

import Row from 'src/components/Grid/Row';
import EditorButton from './EditorButton';
import EditorInput from './EditorInput';

type EquationButtonType = {
  value: string;
  equation: string;
};

function Editor(): ReactElement {
  const [equation, setEquation] = useState<string>(
    String.raw`\int_0^1 x^2\ dx`
  );
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEquation(e.currentTarget.value);
  };
  const handleClick = (word: string) => {
    setEquation((prevEquation) => prevEquation + word);
  };
  const equationButtonList: EquationButtonType[] = [
    { value: '루트', equation: String.raw`\sqrt{x}` },
    { value: 'n루트', equation: String.raw`\sqrt[n]{x}` },
    { value: 'integral', equation: String.raw`\int_{}^{}` },
    { value: '분수', equation: String.raw`\frac{}{}` },
    { value: 'delta', equation: String.raw`\Delta` },
  ];
  return (
    <>
      <Row padding="10px">
        {equationButtonList.map((equationButton) => (
          <EditorButton
            onClick={() => {
              handleClick(equationButton.equation);
              textAreaRef.current?.focus();
            }}
          >
            {equationButton.value}
          </EditorButton>
        ))}
      </Row>
      <EditorInput
        equation={equation}
        onChange={handleChange}
        ref={textAreaRef}
      />
      <MathComponent tex={equation} />
    </>
  );
}

export default Editor;
