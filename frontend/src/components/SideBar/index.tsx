import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';

import Column from 'src/components/Grid/Column';

import { SIDE_BAR_OPEN_WIDTH, SIDE_BAR_HEIGHT } from 'src/constant/sideBar';

import { Anchor, AnchorWrapper, ImageWrapper, HorizontalLine } from './style';

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
      <HorizontalLine />
      {menuList.map((menu) => (
        <AnchorWrapper key={menu}>
          <Link href={menu === 'home' ? '/' : `/${menu}`}>
            <Anchor>{menu}</Anchor>
          </Link>
        </AnchorWrapper>
      ))}
    </Column>
  );
}

export default SideBar;
