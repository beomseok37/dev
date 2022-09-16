import { NextPage } from 'next';

import Button from 'src/components/base/Button';
import AppBlock from 'src/components/AppBlock';
import Page from 'src/components/Page';

import { BUTTON_PAGE_CONTENT } from 'src/constant/page';

import { ButtonGroup } from 'src/styles/pages';

const ButtonPage: NextPage = () => {
  return (
    <Page
      header="box"
      pageContentList={[{ content: BUTTON_PAGE_CONTENT, done: true }]}
    >
      <AppBlock>
        <ButtonGroup>
          <Button size="large">Button</Button>
          <Button>Button</Button>
          <Button size="small">Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" color="gray">
            Button
          </Button>
          <Button color="gray">Button</Button>
          <Button size="small" color="gray">
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" color="pink">
            Button
          </Button>
          <Button color="pink">Button</Button>
          <Button size="small" color="pink">
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" color="pink" outline>
            Button
          </Button>
          <Button color="pink" outline>
            Button
          </Button>
          <Button size="small" color="pink" outline>
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" fullWidth>
            Button
          </Button>
          <Button color="gray" fullWidth>
            Button
          </Button>
          <Button size="small" color="pink" fullWidth>
            Button
          </Button>
        </ButtonGroup>
      </AppBlock>
    </Page>
  );
};
export default ButtonPage;
