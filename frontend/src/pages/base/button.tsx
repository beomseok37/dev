import { NextPage } from 'next';
import { useState } from 'react';

import Page from 'src/components/Page';

import { BUTTON_PAGE_CONTENT } from 'src/constant/page';

import { ButtonGroup, FloatButton, RotateButton } from 'src/styles/pages';

const ButtonPage: NextPage = () => {
  const [button, setButton] = useState('nothing');

  return (
    <Page
      header="button"
      pageContentList={[{ content: BUTTON_PAGE_CONTENT, done: true }]}
    >
      <p>selected: {button}</p>
      <ButtonGroup>
        <FloatButton onClick={() => setButton('float button')}>
          float button
        </FloatButton>
      </ButtonGroup>
      <ButtonGroup>
        <RotateButton onClick={() => setButton('home')}>
          <span>Click!</span>
          <span>home</span>
        </RotateButton>
        <RotateButton onClick={() => setButton('base')}>
          <span>Click!</span>
          <span>base</span>
        </RotateButton>
      </ButtonGroup>
    </Page>
  );
};
export default ButtonPage;
