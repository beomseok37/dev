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
  MenuList1,
  MenuList2,
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuBaseRef = useRef<HTMLDivElement>(null);
  const handleClickBase = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleCloseDropdownMenu = () => {
    setIsDropdownOpen(false);
  };
  const handleClickMenu = (e: MouseEvent<HTMLParagraphElement>) => {
    setMenuState(e.currentTarget.innerText);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {isDropdownOpen && <Background onClick={handleCloseDropdownMenu} />}
      {version === 1 ? (
        <DropdownMenuWrapper>
          <MenuBase onClick={handleClickBase} ref={menuBaseRef}>
            {menuState}
          </MenuBase>
          {isDropdownOpen && (
            <MenuList1>
              {menuList.map((menu, index) => (
                <Menu1 key={menu + index.toString()} onClick={handleClickMenu}>
                  {menu}
                </Menu1>
              ))}
            </MenuList1>
          )}
        </DropdownMenuWrapper>
      ) : (
        <DropdownMenuWrapper>
          <MenuBase onClick={handleClickBase} ref={menuBaseRef}>
            {menuState}
          </MenuBase>
          {isDropdownOpen && (
            <MenuList2>
              {menuList.map((menu, index) => (
                <Menu2
                  key={menu + index.toString()}
                  index={index}
                  onClick={handleClickMenu}
                >
                  {menu}
                </Menu2>
              ))}
            </MenuList2>
          )}
        </DropdownMenuWrapper>
      )}
    </>
  );
}

export default DropdownMenu;
