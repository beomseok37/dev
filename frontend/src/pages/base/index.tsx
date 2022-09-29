import { NextPage } from 'next';

import Page from 'src/components/Page';
import ImageCard from 'src/components/ImageCard';

import { BASE_PAGE_CONTENT } from 'src/constant/page';

import { GridWrapper } from 'src/styles/pages/base';

const Base: NextPage = () => {
  return (
    <Page
      header="animation"
      pageContentList={[{ content: BASE_PAGE_CONTENT, done: true }]}
    >
      <GridWrapper>
        <ImageCard page="box" />
        <ImageCard page="button" />
        <ImageCard page="dropdown-menu" />
      </GridWrapper>
    </Page>
  );
};

export default Base;