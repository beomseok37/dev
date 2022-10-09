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
  // AnchorWrapper,
  ImageWrapper,
  HorizontalLine,
  BlogTitle,
  BlackBackground,
  IconWrapper,
} from './style';

const menuList = ['home', 'base', 'redux', 'react-hooks', 'animation'];

function SideBar(): ReactElement {
  return (
    <Column
      width={SIDE_BAR_OPEN_WIDTH}
      height={SIDE_BAR_HEIGHT}
      alignItems="center"
      background="#fff"
      borderRight="1px solid #ddd"
      boxShadow="0 10px 10px #aaa"
      transition
    >
      <ImageWrapper>
        <Image src="/image/road.jpg" width={300} height={300} />
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
          <a target="_blank">
            <IconWrapper>
              <IoLogoGithub size={32} color="#000" />
            </IconWrapper>
          </a>
        </Link>
        <Link href="https://blog.beomseok.dev">
          <a target="_blank">
            <IconWrapper>
              <Image src="/image/tistory-logo.svg" width={37} height={37} />
            </IconWrapper>
          </a>
        </Link>
        <Link href="mailto:bmtosss@gmail.com">
          <a target="_blank">
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
          <Anchor2>
            <span>{menu}</span>
            <span>{menu}</span>
          </Anchor2>
        </Link>
        // <AnchorWrapper key={menu}>
        // <Link href={menu === 'home' ? '/' : `/${menu}`}>
        //   <Anchor>
        //     {menu}
        //   </Anchor>
        // </Link>
        // </AnchorWrapper>
      ))}
    </Column>
  );
}

export default SideBar;
