import Image from 'next/image';
import { BsChatDotsFill } from 'react-icons/bs';

import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/reducer/user';

import Column from 'src/components/base/Grid/Column';
import CharacterImage from 'src/components/MiniMe/CharacterImage';
import SlideInByScroll from 'src/components/SlideInByScroll';
import Row from 'src/components/base/Grid/Row';

import { Blank, P, Callout, Code } from './style';

function HomeComponent() {
  const user = useSelector(selectUser);

  return (
    <Column padding="30px">
      <Blank size={60} />
      <SlideInByScroll>
        <P fontSize="big">안녕하세요 한범석입니다.👐</P>
        <Blank size={50} />
        <P fontSize="medium">
          이곳은 컴포넌트 개발, css 테스트를 위한 공간입니다.
        </P>
        <Blank size={20} />
        <P fontSize="medium">
          이외에도 사용자들의 상호작용을 위한 요소가 존재합니다!
        </P>
      </SlideInByScroll>
      <Blank size={80} />

      <SlideInByScroll>
        <P fontSize="medium">1. 미니미 🤡</P>
        <Blank size={10} />
        <Callout>
          <Row alignItems="center">
            <p>💡 웹 클라이언트와 서버 간의 실시간 양방향 통신을 위해</p>
            <Code>Socket.IO</Code>
            <p>를 활용했습니다.</p>
          </Row>
          <Blank size={20} />
          <p>◾️ 방향키를 이용해 캐릭터 이동이 가능합니다🏃</p>
          <Blank size={4} />
          <p>◾️ z 방향키 입력 시 춤을 출 수 있습니다👯‍♀️</p>
          <Blank size={4} />
          <p>◾️ 모니터 주사율로 인한 이동 속도 차이가 있습니다..🥲</p>
        </Callout>
      </SlideInByScroll>
      <Blank size={20} />
      <SlideInByScroll>
        <P>미니미 맵 이동</P>
        <Row alignItems="center">
          <Image
            src="/image/home_page.png"
            width="800px"
            height="400px"
            layout="fixed"
            alt="이름 입력 모달"
          />
          <Row alignItems="center">
            <P>오른쪽 위 캐릭터</P>
            <CharacterImage
              character={user.character}
              border="1px solid #000"
              isAbsolute
            />
            <P>를 누르면 캐릭터 선택창으로 이동가능합니다.</P>
          </Row>
        </Row>
      </SlideInByScroll>
      <Blank size={60} />
      <SlideInByScroll>
        <P>캐릭터 선택 창</P>
        <Row alignItems="center">
          <Image
            src="/image/name_input.png"
            width="800px"
            height="400px"
            layout="fixed"
            alt="캐릭터 선택 창"
          />
          <P>
            원하는 캐릭터와 이미지를 선택한 뒤 save 버튼을 클릭하면 맵으로
            이동합니다
          </P>
        </Row>
      </SlideInByScroll>
      <Blank size={60} />
      <SlideInByScroll>
        <P>캐릭터 이동</P>
        <Row alignItems="center">
          <Image
            src="/image/character_move.png"
            width="600px"
            height="600px"
            layout="fixed"
            alt="캐릭터 이동"
          />
          <P> ➡️ ⬅️ ⬆️ ⬇️ 방향키를 이용해 이동할 수 있습니다.</P>
        </Row>
      </SlideInByScroll>
      <Blank size={60} />
      <SlideInByScroll>
        <P>캐릭터 춤</P>
        <Row alignItems="center">
          <Image
            src="/image/character_dance.png"
            width="600px"
            height="600px"
            layout="fixed"
            alt="캐릭터 춤"
          />
          <P> 🆉 방향키를 꾹 누르면 캐릭터가 춤을 춥니다</P>
        </Row>
      </SlideInByScroll>
      <Blank size={60} />
      <SlideInByScroll>
        <P fontSize="medium">2. 채팅 💬</P>
        <Callout>
          <Row alignItems="center">
            <p>💡 웹 클라이언트와 서버 간의 실시간 양방향 통신을 위해</p>
            <Code>Socket.IO</Code>
            <p>를 활용했습니다.</p>
          </Row>
          <Blank size={20} />
          <p>◾️ 미니미 맵 상에서 채팅이 가능합니다.</p>
          <Blank size={4} />
          <p>◾️ 어떠한 공간에서도 전체 채팅이 가능합니다.</p>
          <Blank size={4} />
          <p>◾️ 두 채팅 공간은 나누어진 공간입니다.</p>
          <Blank size={4} />
          <p>◾️ 채팅 내용은 웹 사이트 종료 시 저장되지 않습니다..🥲</p>
        </Callout>
      </SlideInByScroll>
      <Blank size={20} />
      <SlideInByScroll>
        <P>미니미 채팅</P>
        <Row alignItems="center">
          <Image
            src="/image/minime_chat.png"
            width="600px"
            height="600px"
            layout="fixed"
            alt="미니미 채팅"
          />
          <P>미니미 맵 아래 메시지를 입력하세요를 누르면 채팅이 가능합니다.</P>
        </Row>
      </SlideInByScroll>
      <Blank size={60} />
      <SlideInByScroll>
        <P>전체 채팅</P>
        <Row alignItems="center">
          <Image
            src="/image/whole_chat.png"
            width="800px"
            height="400px"
            layout="fixed"
            alt="전체 채팅"
          />
          <Row alignItems="center">
            <P>오른쪽 아래 채팅 버튼</P>
            <BsChatDotsFill size={30} color="#0087bf" />
            <P>을 누르면 전체 채팅이 가능합니다.</P>
          </Row>
        </Row>
      </SlideInByScroll>
    </Column>
  );
}

export default HomeComponent;
