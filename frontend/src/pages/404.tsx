import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Column from 'src/components/Grid/Column';

import { P, Button, Span } from 'src/styles/pages/404';

const Custom404Page: NextPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <Column justifyContent="center" alignItems="center" height="100%">
      <P>페이지가 없네요😥</P>
      <Button onClick={handleClick}>
        <Span>이전 페이지로</Span>
      </Button>
    </Column>
  );
};

export default Custom404Page;
