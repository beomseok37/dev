import React, { ReactNode } from 'react';

import { Wrapper } from './style';

interface props {
  children: ReactNode;
}

const AppBlock = ({ children }: props): React.ReactElement => {
  return <Wrapper>{children}</Wrapper>;
};

export default AppBlock;
