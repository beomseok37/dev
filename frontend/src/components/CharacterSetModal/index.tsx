import { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UsernameSelector from 'src/components/UsernameSelector';
import CharacterSelector from 'src/components/CharacterSelector';
import Button from 'src/components/base/Button';

import {
  selectUser,
  changeCharacter,
  changeUsername,
} from 'src/redux/reducer/user';

import { Wrapper, Background } from './style';

interface Props {
  handleSave: () => void;
}

function CharacterSetModal({ handleSave }: Props): ReactElement {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const characterBind = useState(user.character);
  const usernameBind = useState(user.username);

  const handleClick = () => {
    dispatch(changeCharacter(characterBind[0]));
    dispatch(changeUsername(usernameBind[0]));
    handleSave();
  };

  return (
    <>
      <Background />
      <Wrapper>
        <CharacterSelector characterBind={characterBind} />
        <UsernameSelector usernameBind={usernameBind} />
        <Button onClick={handleClick} margin="8px">
          save
        </Button>
      </Wrapper>
    </>
  );
}

export default CharacterSetModal;
