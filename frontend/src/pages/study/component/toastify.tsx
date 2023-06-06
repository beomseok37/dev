import Column from 'src/components/Grid/Column';
import Page from 'src/components/Page';
import Button from 'src/components/base/Button';
import Toastify from 'src/components/Toastify/ToastList';

import useToastify from 'src/hooks/useToastify';

import { TOASTIFY_CONTENT } from 'src/constant/page';

function ToastifyPage() {
  const { toastList, addToast, removeToast } = useToastify();

  const handleClick = () => {
    addToast();
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
        <p>아래 버튼을 클릭할 경우 toastify 컴포넌트가 생성됩니다</p>
        <br />
        <Button color="blue" size="medium" onClick={handleClick}>
          알람!
        </Button>
      </Column>
      <Toastify toastList={toastList} removeToast={removeToast} />
    </Page>
  );
}

export default ToastifyPage;
