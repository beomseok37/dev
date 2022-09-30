import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from 'react';

import Row from 'src/components/Grid/Row';
import Column from 'src/components/Grid/Column';
import Input from 'src/components/base/Input';

import { Title } from './style';

interface Props {
  usernameBind: [string, Dispatch<SetStateAction<string>>];
}

function UsernameSelector({ usernameBind }: Props): ReactElement {
  const [username, setUsername] = usernameBind;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  return (
    <Row width="500px" alignItems="center">
      <Column width="100px" height="100%" borderRight="1px solid #fff">
        <Title>input</Title>
        <Title>username</Title>
      </Column>
      <Row padding="0 0 0 20px">
        <Input value={username} onChange={handleChange} width="150px" />
      </Row>
    </Row>
  );
}

export default UsernameSelector;
