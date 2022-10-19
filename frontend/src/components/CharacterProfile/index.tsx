import { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import Row from 'src/components/Grid/Row';
import CharacterImage from 'src/components/CharacterImage';

import { selectUser } from 'src/redux/reducer/user';

import { Username, FloatButton } from './style';

interface Props {
  onOpenSelectModal: () => void;
}

const CharacterProfile = ({ onOpenSelectModal }: Props): ReactElement => {
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
      <FloatButton onClick={onOpenSelectModal}>
        <p>Change</p>
        <p>Character</p>
      </FloatButton>
    </Row>
  );
};

export default CharacterProfile;
