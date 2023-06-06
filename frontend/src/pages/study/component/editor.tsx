import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Page from 'src/components/Page';
import Loading from 'src/components/Loading';

import { EDITOR_PAGE_CONTENT } from 'src/constant/page';

const DynamicEditor = dynamic(() => import('src/components/Editor'), {
  ssr: false,
});

const EditorPage: NextPage = () => {
  return (
    <Page
      header="equation editor"
      pageContentList={[{ content: EDITOR_PAGE_CONTENT, done: true }]}
    >
      <Suspense fallback={<Loading />}>
        <DynamicEditor />
      </Suspense>
    </Page>
  );
};

export default EditorPage;
