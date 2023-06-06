import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IoLogoGithub } from 'react-icons/io';

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
      <div style={{ padding: '0 0 0 10px' }}>
        <p>안녕하세요 블로그 운영자 한범석입니다.</p>
        <p>이 블로그는 frontend의 여러 기술들을 연습하기 위한 사이트입니다.</p>
        <br />
        <p>
          평소 개발해보고 싶었던 컴포넌트나 기술들에 대한 연습을 하고 있습니다.
        </p>
        <br />
        <p>
          오른쪽 위 캐릭터를 누를 경우 다른 사용자들과 함께 상호작용할 수 있는
          공간을 마련해두었습니다.
        </p>
        <br />
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <IoLogoGithub size={32} color="#000" />
          깃허브와
          <Image
            src="/image/tistory-logo.svg"
            width={37}
            height={37}
            alt="beomseok's tistory blog"
          />
          기술 블로그 를 운영하고 있습니다. 왼쪽 메뉴의 각 이모티콘들을 클릭할
          경우 이동할 수 있습니다.
        </p>
      </div>
      <MainChat />
    </Page>
  );
};

export default Home;
