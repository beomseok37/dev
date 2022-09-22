import { ChangeEvent, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Column from 'src/components/Grid/Column';
import Input from 'src/components/base/Input';
import Button from 'src/components/base/Button';

import socket from 'src/socket';

import { selectUser, changeUsername } from 'src/redux/reducer/user';

import { Title } from './style';

function UsernameSelector(): ReactElement {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [username, setUsername] = useState(user.username);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const handleClick = () => {
    dispatch(changeUsername(username));
    socket.emit('changeUsername', socket.id, username);
  };

  return (
    <Column
      width="176px"
      background="#506EA5"
      alignItems="center"
      borderLeft="1px solid white"
    >
      <Title>input username</Title>
      <Input value={username} onChange={handleChange} />
      <Button onClick={handleClick} margin="8px">
        save
      </Button>
    </Column>
  );
}

export default UsernameSelector;
