import { NextPage } from 'next';
// import dynamic from 'next/dynamic';
// import Script from 'next/script';
// import { Suspense } from 'react';

import Page from 'src/components/Page';
// import Loading from 'src/components/Loading';

import { EDITOR_PAGE_CONTENT } from 'src/constant/page';

// const DynamicEditor = dynamic(() => import('src/components/Editor'));

const EditorPage: NextPage = () => {
  return (
    <Page
      header="equation editor"
      pageContentList={[{ content: EDITOR_PAGE_CONTENT, done: true }]}
    >
      {/* <Suspense fallback={<Loading />}>
          <DynamicEditor />
        </Suspense> */}
      <p>
        😥수식 편집기 구현은 완료하였으나 react 관련 패키지라 작동하지 않아 주석
        처리했습니다.
      </p>
      <p>local에서 실행할 경우 editor 페이지의 주석을 되돌리면 동작합니다.</p>
    </Page>
  );
};

export default EditorPage;
