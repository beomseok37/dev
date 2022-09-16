import {
  SIDE_BAR_BACKGROUND_COLOR,
  SIDE_BAR_FONT_COLOR,
  SIDE_BAR_FONT_HOVER_COLOR,
  SIDE_BAR_BUTTON_COLOR,
  SIDE_BAR_BUTTON_HOVER_COLOR,
} from 'src/constant/sideBar';

const theme = {
  backgroundColors: {
    sideBar: SIDE_BAR_BACKGROUND_COLOR,
    sideBarButton: SIDE_BAR_BUTTON_COLOR,
    sideBarButtonHover: SIDE_BAR_BUTTON_HOVER_COLOR,
    unset: 'unset',
  },
  fontColors: {
    sideBar: SIDE_BAR_FONT_COLOR,
    sideBarHover: SIDE_BAR_FONT_HOVER_COLOR,
  },
};

// eslint-disable-next-line import/prefer-default-export
export { theme };
