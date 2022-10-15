import { NextPage } from 'next';

import Page from 'src/components/Page';
import PracticeAnimation from 'src/components/PracticeAnimation';

import { ANIMATION_PAGE_CONTENT } from 'src/constant/page';

const Animation: NextPage = () => {
  return (
    <Page
      header="animation"
      pageContentList={[{ content: ANIMATION_PAGE_CONTENT, done: true }]}
    >
      <PracticeAnimation />
    </Page>
  );
};

export default Animation;
