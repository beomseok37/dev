import { NextPage } from 'next';

import Page from 'src/components/Page';
import ReduxCounter from 'src/components/study/study/ReduxCounter';
import ReduxTodoList from 'src/components/study/study/ReduxTodoList';

import {
  REDUX_COUNT_CONTENT,
  REDUX_TODO_LIST_CONTENT,
} from 'src/constant/page';

const Redux: NextPage = () => {
  return (
    <Page
      header="redux"
      pageContentList={[
        { content: REDUX_COUNT_CONTENT, done: true },
        { content: REDUX_TODO_LIST_CONTENT, done: true },
      ]}
    >
      <ReduxCounter />
      <ReduxTodoList />
    </Page>
  );
};

export default Redux;
