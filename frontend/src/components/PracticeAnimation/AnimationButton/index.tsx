import { ChangeEvent, ReactElement, useRef } from 'react';
import Column from 'src/components/Grid/Column';

import Row from 'src/components/Grid/Row';
import Input from 'src/components/base/Input';
import {
  AnimationButtonWrapper,
  HoverAnimationButton,
  InputAnimationButton,
} from './style';

function AnimationButton(): ReactElement {
  const hoverAnimationButtonRef = useRef<HTMLButtonElement>(null);
  const inputAnimationButtonRef = useRef<HTMLButtonElement>(null);
  const handleHover = () => {
    const button = hoverAnimationButtonRef.current as HTMLButtonElement;
    button.innerHTML = button.innerHTML === '버튼' ? 'Hover!!' : '버튼';
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const button = inputAnimationButtonRef.current as HTMLButtonElement;
    if (e.currentTarget.value.length >= 2 && button.innerHTML === '버튼') {
      button.innerHTML = 'Input!!';
      button.style.background = 'orange';
    } else if (
      e.currentTarget.value.length < 2 &&
      button.innerHTML === 'Input!!'
    ) {
      button.innerHTML = '버튼';
      button.style.background = 'buttonface';
    }
  };
  return (
    <Column padding="20px">
      <Row>
        <AnimationButtonWrapper>
          <HoverAnimationButton
            onMouseEnter={handleHover}
            onMouseOut={handleHover}
            ref={hoverAnimationButtonRef}
          >
            버튼
          </HoverAnimationButton>
        </AnimationButtonWrapper>
        <AnimationButtonWrapper>
          <InputAnimationButton ref={inputAnimationButtonRef}>
            버튼
          </InputAnimationButton>
        </AnimationButtonWrapper>
      </Row>
      <Input onChange={handleChange} />
    </Column>
  );
}

export default AnimationButton;
