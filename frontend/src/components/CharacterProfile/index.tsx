import { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import Row from 'src/components/Grid/Row';
import CharacterImage from 'src/components/CharacterImage';

import { selectUser } from 'src/redux/reducer/user';

import { Username, FloatButton } from './style';

interface Props {
  onOpenSelectModal: () => void;
}

function CharacterProfile({ onOpenSelectModal }: Props): ReactElement {
  const user = useSelector(selectUser);
  return (
    <Row
      width="576px"
      height="50px"
      background="transparent"
      alignItems="center"
      padding="0 20px"
      justifyContent="space-between"
    >
      <Row height="50px" alignItems="center">
        <CharacterImage character={user.character} isAbsolute />
        <Username>{user.username}</Username>
      </Row>
      <FloatButton onClick={onOpenSelectModal} aria-label="캐릭터 변경 버튼">
        <p>Change</p>
        <p>Character</p>
      </FloatButton>
    </Row>
  );
}

export default CharacterProfile;
