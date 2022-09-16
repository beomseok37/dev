import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    backgroundColors: {
      sideBar: string;
      sideBarButton: string;
      sideBarButtonHover: string;
      unset: string;
    };
    fontColors: {
      sideBar: string;
      sideBarHover: string;
    };
  }
}
