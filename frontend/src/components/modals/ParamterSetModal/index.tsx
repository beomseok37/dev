import { ChangeEvent, ReactElement, useState } from 'react';

import Column from 'src/components/base/Grid/Column';
import Row from 'src/components/base/Grid/Row';
import Input from 'src/components/base/Input';
import ModalCommon from 'src/components/modals/Common';

import { ComponentType } from 'src/types';

import { Button } from './style';

interface Props {
  onClose: () => void;
  component: ComponentType;
  // eslint-disable-next-line no-unused-vars
  onSaveParameter: (id: string, parameter1: string, parameter2: string) => void;
}
function ParameterSetModal({
  onClose,
  component,
  onSaveParameter,
}: Props): ReactElement {
  const [param1, setParam1] = useState(component.parameter.parameter1);
  const [param2, setParam2] = useState(component.parameter.parameter2);

  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setParam1(e.currentTarget.value);
  };
  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setParam2(e.currentTarget.value);
  };
  const handleClickSave = () => {
    onSaveParameter(component.id, param1, param2);
    onClose();
  };
  return (
    <ModalCommon width={500} height={300} onClose={onClose}>
      <Column
        width="100%"
        height="100%"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <p>{component.id}'s parameter</p>
        <Row width="100%" justifyContent="space-around" alignItems="center">
          <p>param1</p>
          <Input onChange={handleChange1} value={param1} width="300px" />
        </Row>
        <Row width="100%" justifyContent="space-around" alignItems="center">
          <p>param2</p>
          <Input onChange={handleChange2} value={param2} width="300px" />
        </Row>
        <Button onClick={handleClickSave}>parameter save</Button>
      </Column>
    </ModalCommon>
  );
}

export default ParameterSetModal;
