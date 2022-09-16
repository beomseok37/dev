import Router from 'next/router';
import { ReactElement, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import Column from 'src/components/Grid/Column';

import {
  SIDE_BAR_OPEN_WIDTH,
  SIDE_BAR_CLOSE_WIDTH,
  SIDE_BAR_HEIGHT,
} from 'src/constant/sideBar';

import { ButtonWrapper, ToggleButton, IconCSS, Anchor } from './style';

const menuList = [
  'button',
  'box',
  'redux',
  'react-hooks',
  'animation',
  'dropdown-menu',
];

function SideBar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRoute = (path: string) => {
    Router.push(`${path}`);
  };
  return (
    <Column
      width={isOpen ? SIDE_BAR_OPEN_WIDTH : SIDE_BAR_CLOSE_WIDTH}
      height={SIDE_BAR_HEIGHT}
      alignItems="center"
      background="sideBar"
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
            <Anchor key={menu} onClick={() => handleRoute(menu)}>
              {menu}
            </Anchor>
          ))}
        </>
      )}
    </Column>
  );
}

export default SideBar;
