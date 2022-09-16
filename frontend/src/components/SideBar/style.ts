import styled from '@emotion/styled';
import { css } from '@emotion/react';

import {
  SIDE_BAR_BUTTON_BOX_SHADOW_COLOR,
  SIDE_BAR_FONT_COLOR,
  SIDE_BAR_FONT_HOVER_COLOR,
} from 'src/constant/sideBar';

interface ToggleButtonProps {
  isOpen: boolean;
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
`;

const ToggleButton = styled.button<ToggleButtonProps>`
  width: 34px;
  height: 34px;
  padding: 4px;
  border-radius: 4px;
  color: ${({ isOpen }) =>
    isOpen ? SIDE_BAR_FONT_HOVER_COLOR : SIDE_BAR_FONT_COLOR};
  background: ${({ theme }) => theme.backgroundColors.sideBarButton};
  box-shadow: 1px 1px 1px 1px ${SIDE_BAR_BUTTON_BOX_SHADOW_COLOR};
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 1px 1px 1px 1px ${SIDE_BAR_BUTTON_BOX_SHADOW_COLOR} inset;
  }
`;

const IconCSS = css`
  &:hover {
    transform: rotate(0.1turn);
    transition: all ease 0.5s;
  }
  transition: all ease 0.5s;
`;

const Anchor = styled.button`
  width: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.fontColors.sideBar};
  background: ${({ theme }) => theme.backgroundColors.sideBar};
  font-size: 20px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.fontColors.sideBarHover};
    background: ${({ theme }) => theme.backgroundColors.sideBarButtonHover};
  }
  &:active {
    box-shadow: 1px 1px 1px 1px ${SIDE_BAR_BUTTON_BOX_SHADOW_COLOR} inset;
  }
`;
export { ButtonWrapper, ToggleButton, IconCSS, Anchor };
