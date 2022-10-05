import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import Column from 'src/components/Grid/Column';

import {
  SIDE_BAR_OPEN_WIDTH,
  SIDE_BAR_CLOSE_WIDTH,
  SIDE_BAR_HEIGHT,
} from 'src/constant/sideBar';

import { ButtonWrapper, ToggleButton, IconCSS, Anchor } from './style';

const menuList = ['home', 'base', 'redux', 'react-hooks', 'animation'];

function SideBar(): ReactElement {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Column
      width={isOpen ? SIDE_BAR_OPEN_WIDTH : SIDE_BAR_CLOSE_WIDTH}
      height={SIDE_BAR_HEIGHT}
      alignItems="center"
      background="#506EA5"
      transition
    >
      <ButtonWrapper>
        <ToggleButton onClick={handleToggle} isOpen={isOpen}>
          <GiHamburgerMenu size={24} css={IconCSS} />
        </ToggleButton>
      </ButtonWrapper>

      {isOpen && (
        <>
          {menuList.map((menu) => (
            <Link key={menu} href={menu === 'home' ? '/' : `/${menu}`}>
              <Anchor>{menu}</Anchor>
            </Link>
          ))}
        </>
      )}
    </Column>
  );
}

export default SideBar;
