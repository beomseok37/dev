import { ReactElement } from 'react';
import Link from 'next/link';

import { Wrapper, Title } from './style';

interface props {
  pageName: string;
}

const Header = ({ pageName }: props): ReactElement => {
  return (
    <Wrapper>
      <Link href="/">
        <Title>{pageName} page</Title>
      </Link>
    </Wrapper>
  );
};

export default Header;
