import { NextPage } from 'next';

import Page from 'src/components/Page';
import BaseCard from 'src/components/BaseCard';

import { BASE_PAGE_CONTENT } from 'src/constant/page';

import { GridWrapper } from 'src/styles/pages/base';

const Base: NextPage = () => {
  const baseList = ['box', 'button', 'dropdown-menu', 'echarts', 'xarrows'];
  return (
    <Page
      header="animation"
      pageContentList={[{ content: BASE_PAGE_CONTENT, done: true }]}
    >
      <GridWrapper>
        {baseList.map((base, index) => (
          <BaseCard key={base + index.toString()} page={base} />
        ))}
      </GridWrapper>
    </Page>
  );
};

export default Base;
