import type { NextPage } from 'next';

import Page from 'src/components/Page';
import Chat from 'src/components/chat';

const Home: NextPage = () => {
  return (
    <Page header="home">
      <p style={{ padding: '0 0 0 10px' }}>
        이 블로그는 frontend의 여러 기술들을 연습하기 위한 사이트이다.
      </p>
      <Chat />
    </Page>
  );
};

export default Home;
