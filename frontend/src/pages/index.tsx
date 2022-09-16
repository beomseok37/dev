import type { NextPage } from 'next';

import Page from 'src/components/Page';

const Home: NextPage = () => {
  return (
    <Page header="box">
      <p>이 블로그는 frontend의 여러 기술들을 연습하기 위한 사이트이다.</p>
    </Page>
  );
};

export default Home;
