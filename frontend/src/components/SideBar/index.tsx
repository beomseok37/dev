import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';
import { IoLogoGithub } from 'react-icons/io';
import { IoMailOutline } from 'react-icons/io5';

import Column from 'src/components/Grid/Column';
import Row from 'src/components/Grid/Row';

import { SIDE_BAR_OPEN_WIDTH, SIDE_BAR_HEIGHT } from 'src/constant/sideBar';

import {
  Anchor2,
  ImageWrapper,
  HorizontalLine,
  BlogTitle,
  BlackBackground,
  IconWrapper,
} from './style';

const menuList = ['home', 'study'];

function SideBar(): ReactElement {
  const router = useRouter();
  const handleClickLogo = () => {
    router.push('/');
  };
  return (
    <Column
      width={SIDE_BAR_OPEN_WIDTH}
      height={SIDE_BAR_HEIGHT}
      alignItems="center"
      background="#fff"
      borderRight="1px solid #ddd"
      boxShadow="0 10px 10px #aaa"
      position="fixed"
      transition
    >
      <ImageWrapper>
        <Image
          src="https://github.com/beomseok37.png"
          width={300}
          height={300}
          alt="beomseok37's GitHub Avatar"
          onClick={handleClickLogo}
          style={{ cursor: 'pointer' }}
        />
      </ImageWrapper>
      <BlogTitle>Cotton dev</BlogTitle>
      <HorizontalLine />
      <Row
        width="100%"
        height="40px"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Link href="https://github.com/beomseok37">
          <a target="_blank" aria-label="beomseok37 깃허브 이동">
            <IconWrapper>
              <IoLogoGithub size={32} color="#000" />
            </IconWrapper>
          </a>
        </Link>
        <Link href="https://blog.beomseok.dev">
          <a target="_blank" aria-label="beomseok tistory 이동">
            <IconWrapper>
              <Image
                src="/image/tistory-logo.svg"
                width={37}
                height={37}
                alt="beomseok's tistory blog"
              />
            </IconWrapper>
          </a>
        </Link>
        <Link href="mailto:bmtosss@gmail.com">
          <a target="_blank" aria-label="beomseok에게 메일 보내기">
            <IconWrapper>
              <BlackBackground>
                <IoMailOutline size={20} color="#fff" />
              </BlackBackground>
            </IconWrapper>
          </a>
        </Link>
      </Row>
      <HorizontalLine />
      {menuList.map((menu) => (
        <Link key={menu} href={menu === 'home' ? '/' : `/${menu}`}>
          <Anchor2 aria-label="메뉴 이동 버튼">
            <span>{menu}</span>
            <span>{menu}</span>
          </Anchor2>
        </Link>
      ))}
    </Column>
  );
}

export default SideBar;
