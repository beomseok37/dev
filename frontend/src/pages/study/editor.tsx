import { NextPage } from 'next';

import Page from 'src/components/Page';
import Editor from 'src/components/Editor/index';

import { EDITOR_PAGE_CONTENT } from 'src/constant/page';

const EditorPage: NextPage = () => {
  return (
    <Page
      header="equation editor"
      pageContentList={[{ content: EDITOR_PAGE_CONTENT, done: true }]}
    >
      <Editor />
    </Page>
  );
};

export default EditorPage;
