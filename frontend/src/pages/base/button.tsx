import { NextPage } from 'next';
import { useState } from 'react';

import Page from 'src/components/Page';

import { BUTTON_PAGE_CONTENT } from 'src/constant/page';

import {
  ButtonGroup,
  FloatButton,
  RotateButton,
  Scale3dButton,
} from 'src/styles/pages';

const ButtonPage: NextPage = () => {
  const [button, setButton] = useState('nothing');

  return (
    <Page
      header="button"
      pageContentList={[{ content: BUTTON_PAGE_CONTENT, done: true }]}
    >
      <p>selected: {button}</p>
      <ButtonGroup>
        <p>둥둥 떠다니는 버튼</p>
        <FloatButton onClick={() => setButton('float button')}>
          float button
        </FloatButton>
      </ButtonGroup>
      <ButtonGroup>
        <p>구르는 버튼</p>
        <RotateButton onClick={() => setButton('home')}>
          <span>Click!</span>
          <span>home</span>
        </RotateButton>
        <RotateButton onClick={() => setButton('base')}>
          <span>Click!</span>
          <span>base</span>
        </RotateButton>
      </ButtonGroup>
      <ButtonGroup>
        <p>animation button1</p>
        <Scale3dButton onClick={() => setButton('scale 3d button')}>
          scale 3d button
        </Scale3dButton>
      </ButtonGroup>
    </Page>
  );
};
export default ButtonPage;
