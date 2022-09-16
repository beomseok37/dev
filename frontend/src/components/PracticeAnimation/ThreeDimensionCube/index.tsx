import { ReactElement, useState } from 'react';
import Column from 'src/components/Grid/Column';
import Row from 'src/components/Grid/Row';
import Button from 'src/components/base/Button';

import { MoveBox, Rotate, Scene } from './style';

function ThreeDimensionCube(): ReactElement {
  const [frontAngle, setFrontAngle] = useState('0');

  const sideList = ['Front', 'Right', 'Back', 'Left'];

  const handleClick = (side: string) => {
    switch (side) {
      case 'Front':
        setFrontAngle('0');
        break;
      case 'Right':
        setFrontAngle('-90');
        break;
      case 'Back':
        setFrontAngle('180');
        break;
      case 'Left':
        setFrontAngle('90');
        break;
      default:
        console.log('wrong input');
        break;
    }
  };

  return (
    <Column>
      <Row>
        {sideList.map((side) => (
          <Button key={side} onClick={() => handleClick(side)}>
            {side}
          </Button>
        ))}
      </Row>
      <Scene>
        <Rotate>
          <MoveBox rotateY={frontAngle} color="red">
            Front
          </MoveBox>
          <MoveBox rotateY={`${+frontAngle + 90}`} color="blue">
            Right
          </MoveBox>
          <MoveBox rotateY={`${+frontAngle + 180}`} color="purple">
            Back
          </MoveBox>
          <MoveBox rotateY={`${+frontAngle - 90}`} color="green">
            Left
          </MoveBox>
          <MoveBox rotateX="90deg" rotateZ={frontAngle} color="orange">
            Top
          </MoveBox>
          <MoveBox rotateX="-90deg" rotateZ={`${-frontAngle}`} color="grey">
            Bottom
          </MoveBox>
        </Rotate>
      </Scene>
    </Column>
  );
}

export default ThreeDimensionCube;
