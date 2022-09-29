import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import Page from 'src/components/Page';
import DropdownMenu from 'src/components/DropdownMenu';
import Row from 'src/components/Grid/Row';
import Column from 'src/components/Grid/Column';

import { DROPDOWN_MENU_PAGE_CONTENT } from 'src/constant/page';

const DropdownMenuPage: NextPage = () => {
  const bind1 = useState('');
  const bind2 = useState('');
  const menuList = ['사과', '배', '오렌지', '수박'];

  return (
    <Page
      header="dropdown menu"
      pageContentList={[{ content: DROPDOWN_MENU_PAGE_CONTENT, done: true }]}
    >
      <Row width="600px" justifyContent="space-around">
        <Column>
          <p>선택 1</p>
          <DropdownMenu bind={bind1} menuList={menuList} version={1} />
          <p>선택한 물품은 {bind1[0]}</p>
        </Column>
        <Column>
          <p>선택 2</p>
          <DropdownMenu bind={bind2} menuList={menuList} version={2} />
          <p>선택한 물품은 {bind2[0]}</p>
        </Column>
      </Row>
      <p style={{ marginTop: '20px' }}>
        reference by{' '}
        <Link href="https://codinhood.com/micro/10-dropdown-menu-animations-css-transform">
          <a>CODINHOOD</a>
        </Link>
      </p>
    </Page>
  );
};

export default DropdownMenuPage;
