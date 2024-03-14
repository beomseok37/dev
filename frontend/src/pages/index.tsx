import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomeComponent from 'src/components/Home';

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
      <HomeComponent />
      <MainChat />
    </Page>
  );
};

export default Home;
