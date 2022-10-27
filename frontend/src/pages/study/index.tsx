import { NextPage } from 'next';

import Page from 'src/components/Page';
import BaseCard from 'src/components/BaseCard';
import Column from 'src/components/Grid/Column';

import { GridWrapper, HorizontalLine, Title } from 'src/styles/pages/base';

const Base: NextPage = () => {
  const componentList = ['dropdown-menu', 'echarts', 'xarrows'];
  const cssList = ['button', 'animation'];
  const studyList = ['react-hooks', 'redux', 'github-api'];
  return (
    <Page header="animation">
      <Column padding="10px">
        <Title>Component</Title>
        <GridWrapper>
          {componentList.map((base, index) => (
            <BaseCard
              key={base + index.toString()}
              page={base}
              backgroundColor="#c4f0ff"
              hoverBackgroundColor="#c4d1ff"
            />
          ))}
        </GridWrapper>
        <HorizontalLine />
        <Title>Css</Title>
        <GridWrapper>
          {cssList.map((base, index) => (
            <BaseCard
              key={base + index.toString()}
              page={base}
              backgroundColor="#92d173"
              hoverBackgroundColor="#c5e17a"
            />
          ))}
        </GridWrapper>
        <HorizontalLine />
        <Title>Study</Title>
        <GridWrapper>
          {studyList.map((base, index) => (
            <BaseCard
              key={base + index.toString()}
              page={base}
              backgroundColor="#951957"
              hoverBackgroundColor="#d49bad"
            />
          ))}
        </GridWrapper>
      </Column>
    </Page>
  );
};

export default Base;
