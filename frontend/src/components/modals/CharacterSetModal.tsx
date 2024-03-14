import { ReactElement, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UsernameSelector from 'src/components/MiniMe/UsernameSelector';
import CharacterSelector from 'src/components/MiniMe/CharacterSelector';
import Button from 'src/components/base/Button';

import {
  selectUser,
  changeCharacter,
  changeUsername,
} from 'src/redux/reducer/user';

import { chatSocket, userInfoSocket } from 'src/socket';

import { changeMyInfoInChat, minimeChatIn } from 'src/redux/reducer/chat';
import ModalCommon from './Common';

interface Props {
  onClose: () => void;
  onCloseSelectModal: () => void;
}

function CharacterSetModal({
  onCloseSelectModal,
  onClose,
}: Props): ReactElement {
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
      userInfoSocket.emit(
        'changeCharacterInfo',
        userInfoSocket.id,
        usernameBind[0],
        characterBind[0]
      );
    }
    dispatch(
      changeMyInfoInChat({
        socketID: userInfoSocket.id,
        who: usernameBind[0],
      })
    );
    dispatch(changeCharacter(characterBind[0]));
    dispatch(changeUsername(usernameBind[0]));
    onCloseSelectModal();

    const newMessage = {
      socketID: 'I am not user',
      who: usernameBind[0],
      message: `${usernameBind[0]}님이 입장하셨습니다.`,
    };
    chatSocket.emit('sendMinimeMessage', newMessage);
    dispatch(minimeChatIn(newMessage));
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
      onClose={onClose}
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
