import type { NextPage } from 'next';
import { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';

import Page from 'src/components/Page';
import Row from 'src/components/Grid/Row';
import WholeChat from 'src/components/chat/WholeChat';
import Loading from 'src/components/Loading';

import { chatIn, changeUserInfoInChat } from 'src/redux/reducer/chat';

import { chatSocket, userInfoSocket } from 'src/socket';

const ReactGitHubCalendar = dynamic(() => import('react-ts-github-calendar'), {
  ssr: false,
});

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    chatSocket.on(
      'broadcastMessage',
      (socketID, who, message, character, time) => {
        dispatch(chatIn({ who, message, socketID, character, time }));
      }
    );

    userInfoSocket.on(
      'broadcastChangedCharacterInfo',
      (socketID, who, character) => {
        dispatch(changeUserInfoInChat({ socketID, who, character }));
      }
    );
    return () => {
      userInfoSocket.removeAllListeners();
    };
  }, [dispatch]);

  return (
    <Page header="home">
      <p style={{ padding: '0 0 0 10px' }}>
        이 블로그는 frontend의 여러 기술들을 연습하기 위한 사이트이다.
      </p>
      <Row padding="20px 0 0 20px">
        <Suspense fallback={<Loading />}>
          <ReactGitHubCalendar
            userName="beomseok37"
            global_stats={false}
            tooltips
          />
        </Suspense>
      </Row>
      <WholeChat />
    </Page>
  );
};

export default Home;
