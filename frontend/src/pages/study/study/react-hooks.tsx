import { NextPage } from 'next';

import Row from 'src/components/base/Grid/Row';
import Column from 'src/components/base/Grid/Column';
import Page from 'src/components/Page';
import AppWithUseMemo from 'src/components/study/study/practice-hook/with-useMemo/App';
import AppWithoutUseMemo from 'src/components/study/study/practice-hook/without-useMemo/App';
import AppWithUseCallback from 'src/components/study/study/practice-hook/with-useCallback/App';
import AppWithoutUseCallback from 'src/components/study/study/practice-hook/without-useCallback/App';

import { REACT_HOOKS_PAGE_CONTENT } from 'src/constant/page';

import { SubTitle } from 'src/styles/pages/react-hooks';

const ReactHooks: NextPage = () => {
  return (
    <Page
      header="react hooks"
      pageContentList={[{ content: REACT_HOOKS_PAGE_CONTENT, done: true }]}
    >
      <Row justifyContent="space-around">
        <Column alignItems="center">
          <SubTitle>useMemo</SubTitle>
          <AppWithUseMemo />
        </Column>
        <Column alignItems="center">
          <SubTitle>without useMemo</SubTitle>
          <AppWithoutUseMemo />
        </Column>
      </Row>
      <Row justifyContent="space-around">
        <Column alignItems="center">
          <SubTitle>useCallback</SubTitle>
          <AppWithUseCallback />
        </Column>
        <Column alignItems="center">
          <SubTitle>without useCallback</SubTitle>
          <AppWithoutUseCallback />
        </Column>
      </Row>
    </Page>
  );
};

export default ReactHooks;
