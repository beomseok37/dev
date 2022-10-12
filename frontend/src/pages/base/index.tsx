import { NextPage } from 'next';

import Page from 'src/components/Page';
import BaseCard from 'src/components/BaseCard';

import { BASE_PAGE_CONTENT } from 'src/constant/page';

import { GridWrapper } from 'src/styles/pages/base';

const Base: NextPage = () => {
  return (
    <Page
      header="animation"
      pageContentList={[{ content: BASE_PAGE_CONTENT, done: true }]}
    >
      <GridWrapper>
        <BaseCard page="box" />
        <BaseCard page="button" />
        <BaseCard page="dropdown-menu" />
      </GridWrapper>
    </Page>
  );
};

export default Base;
