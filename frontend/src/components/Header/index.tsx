import { ReactElement } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Button from 'src/components/base/Button';

import { Wrapper, Title } from './style';

interface props {
  pageName: string;
}

const Header = ({ pageName }: props): ReactElement => {
  const handleClick = () => {
    Router.back();
  };
  return (
    <Wrapper>
      <Link href="/">
        <Title>cotton's {pageName} page</Title>
      </Link>
      <Button size="small" onClick={handleClick}>
        return
      </Button>
    </Wrapper>
  );
};

export default Header;
