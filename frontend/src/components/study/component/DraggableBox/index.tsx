/* eslint-disable no-unused-vars */
import { ReactElement, MouseEvent, useState } from 'react';
import Draggable from 'react-draggable';
import { useXarrow } from 'react-xarrows';
import { GrPowerReset } from 'react-icons/gr';

import ParameterSetModal from 'src/components/modals/ParamterSetModal';

import { ComponentType } from 'src/types';

import { Box, Button } from './style';

interface Props {
  component: ComponentType;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  onSaveParameter: (id: string, parameter1: string, parameter2: string) => void;
}

function DraggableBox({
  component,
  onClick,
  onSaveParameter,
}: Props): ReactElement {
  const updateXarrow = useXarrow();
  const [modalShow, setModalShow] = useState(false);

  const handleModalShow = () => {
    setModalShow(true);
  };
  const handleClose = () => {
    setModalShow(false);
  };
  return (
    <>
      <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
        <Box id={component.id} onClick={onClick}>
          {component.id}
          <Button onClick={handleModalShow} aria-label="파라미터 리셋 버튼">
            <GrPowerReset />
          </Button>
        </Box>
      </Draggable>
      {modalShow && (
        <ParameterSetModal
          onClose={handleClose}
          component={component}
          onSaveParameter={onSaveParameter}
        />
      )}
    </>
  );
}

export default DraggableBox;
