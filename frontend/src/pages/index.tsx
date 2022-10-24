import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Page from 'src/components/Page';
import WholeChat from 'src/components/chat/WholeChat';

import { chatIn, changeUserInfoInChat } from 'src/redux/reducer/chat';

import socket from 'src/socket';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('broadcastMessage', (socketID, who, message, character, time) => {
      dispatch(chatIn({ who, message, socketID, character, time }));
    });

    socket.on('broadcastChangedCharacterInfo', (socketID, who, character) => {
      dispatch(changeUserInfoInChat({ socketID, who, character }));
    });
    return () => {
      socket.removeAllListeners();
    };
  }, [dispatch]);

  return (
    <Page header="home">
      <p style={{ padding: '0 0 0 10px' }}>
        이 블로그는 frontend의 여러 기술들을 연습하기 위한 사이트이다.
      </p>
      <WholeChat />
    </Page>
  );
};

export default Home;
