import { ReactElement, ReactNode } from 'react';

import Row from 'src/components/Grid/Row';
import Column from 'src/components/Grid/Column';
import SideBar from 'src/components/SideBar';
import Header from 'src/components/Header';
import PageContent from 'src/components/PageContent';

import { PageContentType } from 'src/types';

interface props {
  children: ReactNode;
  header: string;
  pageContentList?: PageContentType[];
}

function Page({ children, header, pageContentList }: props): ReactElement {
  return (
    <Row height="100%" width="100%">
      <SideBar />
      <Column width="100%">
        <Header pageName={header} />
        {pageContentList!.map((pageContent, index) => (
          <PageContent
            key={pageContent.content + index.toString()}
            content={pageContent.content}
            done={pageContent.done}
          />
        ))}
        {children}
      </Column>
    </Row>
  );
}

Page.defaultProps = {
  pageContentList: [],
};

export default Page;
