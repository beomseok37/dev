import { NextPage } from 'next';

import Page from 'src/components/Page';
import Editor from 'src/components/editor';

import { EDITOR_PAGE_CONTENT } from 'src/constant/page';

const EditorPage: NextPage = () => {
  return (
    <Page
      header="Editor"
      pageContentList={[{ content: EDITOR_PAGE_CONTENT, done: false }]}
    >
      <Editor />
    </Page>
  );
};

export default EditorPage;
