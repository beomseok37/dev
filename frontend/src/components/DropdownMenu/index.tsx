import {
  Dispatch,
  MouseEvent,
  ReactElement,
  SetStateAction,
  useRef,
  useState,
} from 'react';

import {
  Background,
  DropdownMenuWrapper,
  MenuBase,
  MenuList,
  Menu1,
  Menu2,
} from './style';

interface props {
  bind: [string, Dispatch<SetStateAction<string>>];
  menuList: string[];
  version: number;
}

function DropdownMenu({ bind, menuList, version }: props): ReactElement {
  const [menuState, setMenuState] = bind;
  const [isDropdown, setIsDropdown] = useState(false);
  const menuBaseRef = useRef<HTMLDivElement>(null);
  const handleClickBase = () => {
    setIsDropdown(!isDropdown);
  };
  const handleCloseDropdownMenu = () => {
    setIsDropdown(false);
  };
  const handleClickMenu = (e: MouseEvent<HTMLParagraphElement>) => {
    setMenuState(e.currentTarget.innerText);
    setIsDropdown(false);
  };

  return (
    <>
      {isDropdown && <Background onClick={handleCloseDropdownMenu} />}
      {version === 1 ? (
        <DropdownMenuWrapper isDropdown={isDropdown}>
          <MenuBase onClick={handleClickBase} ref={menuBaseRef}>
            {menuState}
          </MenuBase>
          {isDropdown && (
            <MenuList>
              {menuList.map((menu, index) => (
                <Menu1 key={menu + index.toString()} onClick={handleClickMenu}>
                  {menu}
                </Menu1>
              ))}
            </MenuList>
          )}
        </DropdownMenuWrapper>
      ) : (
        <DropdownMenuWrapper isDropdown={isDropdown}>
          <MenuBase onClick={handleClickBase} ref={menuBaseRef}>
            {menuState}
          </MenuBase>
          {isDropdown && (
            <>
              {menuList.map((menu, index) => (
                <Menu2
                  key={menu + index.toString()}
                  index={index}
                  onClick={handleClickMenu}
                >
                  {menu}
                </Menu2>
              ))}
            </>
          )}
        </DropdownMenuWrapper>
      )}
    </>
  );
}

export default DropdownMenu;
