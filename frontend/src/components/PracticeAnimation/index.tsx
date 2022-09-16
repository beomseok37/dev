import { ReactElement } from 'react';

import Column from 'src/components/Grid/Column';
import AnimationButton from './AnimationButton';
import ThreeDimensionCube from './ThreeDimensionCube';

function PracticeAnimation(): ReactElement {
  return (
    <Column>
      <p>animation</p>
      <ThreeDimensionCube />
      <AnimationButton />
    </Column>
  );
}

export default PracticeAnimation;
