import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface DropdownMenuWrapperProps {
  isDropdown: boolean;
}

interface MenuProps {
  index: number;
}

const MenuDefault = css`
  width: 150px;
  height: 25px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const growDown = css`
  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

const scaleZ = css`
  @keyframes scaleZ {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    80% {
      transform: scale(1.07);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Background = styled.div`
  position: fixed;
  inset: 0px;
`;

const DropdownMenuWrapper = styled.div<DropdownMenuWrapperProps>`
  z-index: ${({ isDropdown }) => (isDropdown ? '1' : 'unset')};
  width: fit-content;
  height: 250px;
`;

const MenuBase = styled.p`
  ${MenuDefault}
  border: 1px solid #ccc;
`;

const MenuList = styled.div`
  ${growDown}
  animation: growDown 0.25s ease-in-out forwards;
  transform-origin: top center;
`;

const Menu1 = styled.p`
  ${MenuDefault}
  background: #eee;
`;

const Menu2 = styled.p<MenuProps>`
  ${MenuDefault}
  ${scaleZ}
  background: #eee;
  transform-origin: top center;
  animation: scaleZ ${({ index }) => `${index * 60}ms`} ease-in-out forwards;
`;

export { Background, DropdownMenuWrapper, MenuBase, MenuList, Menu1, Menu2 };
