import { ReactNode, ReactElement } from 'react';

import { Wrapper } from './style';

interface props {
  children: ReactNode;
}

function AppBlock({ children }: props): ReactElement {
  return <Wrapper>{children}</Wrapper>;
}

export default AppBlock;
