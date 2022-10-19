import { ReactElement, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UsernameSelector from 'src/components/UsernameSelector';
import CharacterSelector from 'src/components/CharacterSelector';
import Button from 'src/components/base/Button';

import {
  selectUser,
  changeCharacter,
  changeUsername,
} from 'src/redux/reducer/user';

import socket from 'src/socket';

import ModalCommon from './Common';

interface Props {
  handleSave: () => void;
}

function CharacterSetModal({ handleSave }: Props): ReactElement {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const usernameInputRef = useRef<HTMLInputElement>(null);

  const characterBind = useState(user.character);
  const usernameBind = useState(user.username);

  const handleClick = () => {
    if (
      characterBind[0] !== user.character ||
      usernameBind[0] !== user.username
    ) {
      socket.emit(
        'changeCharacterInfo',
        socket.id,
        usernameBind[0],
        characterBind[0]
      );
    }
    dispatch(changeCharacter(characterBind[0]));
    dispatch(changeUsername(usernameBind[0]));
    handleSave();
  };

  const handleFocus = () => {
    if (usernameInputRef.current) {
      const lastPosition = usernameBind[0].length;
      usernameInputRef.current.focus();
      usernameInputRef.current.setSelectionRange(lastPosition, lastPosition);
    }
  };

  return (
    <ModalCommon
      width={600}
      height={300}
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
      background="#506ea5"
    >
      <CharacterSelector
        characterBind={characterBind}
        handleFocus={handleFocus}
      />
      <UsernameSelector
        usernameBind={usernameBind}
        handleFocus={handleFocus}
        ref={usernameInputRef}
      />
      <Button onClick={handleClick} margin="8px">
        save
      </Button>
    </ModalCommon>
  );
}

export default CharacterSetModal;
