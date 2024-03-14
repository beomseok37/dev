import { ChangeEvent, useState } from 'react';

import Column from 'src/components/base/Grid/Column';
import Page from 'src/components/Page';
import Button from 'src/components/base/Button';
import Toastify from 'src/components/study/component/Toastify/ToastList';
import DropdownMenu from 'src/components/study/component/DropdownMenu';
import Input from 'src/components/base/Input';
import Row from 'src/components/base/Grid/Row';

import useToastify from 'src/hooks/useToastify';

import { ToastifyPositionType } from 'src/types';

import { TOASTIFY_CONTENT } from 'src/constant/page';

function ToastifyPage() {
  const { toastList, addToast, removeToast } = useToastify();
  const [position, setPosition] =
    useState<ToastifyPositionType>('Right-Bottom');
  const [background, setBackground] = useState('#228be6');
  const [seconds, setSeconds] = useState('7');
  const [content, setContent] = useState('알람');

  const handleClick = () => {
    addToast(content);
  };

  const handleChangeBackground = (e: ChangeEvent<HTMLInputElement>) => {
    setBackground(e.target.value);
  };

  const handleChangeSeconds = (e: ChangeEvent<HTMLInputElement>) => {
    setSeconds(e.target.value);
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <Page
      header="Toastify"
      pageContentList={[{ content: TOASTIFY_CONTENT, done: false }]}
    >
      <Column padding="10px">
        <p>Toastify는 사용자에게 알림을 표시해주는 컴포넌트입니다.</p>
        <p>
          사용자의 입력이나 클릭으로 인해 발생할 수 있는 것에 대해 일정 시간
          동안 알림을 표시해주고 시간이 지나면 자동으로 사라집니다.
        </p>
        <p>또한, 사용자가 알람을 바로 삭제하고 싶다면 바로 삭제 가능합니다.</p>
        <br />
        <p>여러 개의 toastify 알람이 필요할 경우 위로 점차 쌓이게 됩니다.</p>
        <p>(알림의 위치는 사용자가 지정할 수 있도록 해줄 예정입니다.)</p>
        <br />
        <p>
          position의 경우 Left-Top, Left-Bottom, Right-Top, Right-Bottom으로
          제한했습니다.
        </p>
        <p>
          Background의 경우 알람의 배경색으로 #000000의 입력 형식을 지켜주세요.
        </p>
        <p>
          seconds는 알람이 존재하는 시간입니다. 숫자를 입력으로 받고 있습니다.
        </p>
        <p>content는 알람의 내용물입니다.</p>
        <p>아래 버튼을 클릭할 경우 toastify 컴포넌트가 생성됩니다</p>
        <br />
        <Row alignItems="center" padding="5px">
          <p style={{ width: '150px' }}>Position :</p>
          <DropdownMenu<ToastifyPositionType>
            bind={[position, setPosition]}
            menuList={['Left-Top', 'Left-Bottom', 'Right-Top', 'Right-Bottom']}
            version={1}
          />
        </Row>
        <Row alignItems="center" padding="5px">
          <p style={{ width: '150px' }}>Background :</p>
          <Input value={background} onChange={handleChangeBackground} />
        </Row>
        <Row alignItems="center" padding="5px">
          <p style={{ width: '150px' }}>Seconds :</p>
          <Input value={seconds} onChange={handleChangeSeconds} />
        </Row>
        <Row alignItems="center" padding="5px">
          <p style={{ width: '150px' }}>content :</p>
          <Input value={content} onChange={handleChangeValue} />
        </Row>
        <Button color="blue" size="medium" onClick={handleClick}>
          알람!
        </Button>
      </Column>
      <Toastify
        toastList={toastList}
        removeToast={removeToast}
        position={position}
        background={background}
        seconds={seconds}
      />
    </Page>
  );
}

export default ToastifyPage;
