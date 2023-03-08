import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Page from 'src/components/Page';
import MainChat from 'src/components/chat/MainChat';

import { mainChatIn, changeUserInfoInChat } from 'src/redux/reducer/chat';

import { chatSocket, userInfoSocket } from 'src/socket';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    chatSocket.on(
      'broadcastMainMessage',
      ({ socketID, who, message, character, time }) => {
        if (character) {
          dispatch(mainChatIn({ who, message, socketID, character, time }));
        }
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
      <MainChat />
    </Page>
  );
};

export default Home;
