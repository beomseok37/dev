import { NextPage } from 'next';
import React, { useState } from 'react';

import Box from 'src/components/Box';
import CheckBox from 'src/components/CheckBox';
import Page from 'src/components/Page';

import { BOX_PAGE_CONTENT } from 'src/constant/page';

import { Check } from 'src/styles/pages';

const BoxPage: NextPage = () => {
  const [check, setCheck] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.currentTarget.checked);
  };
  return (
    <Page
      header="box"
      pageContentList={[{ content: BOX_PAGE_CONTENT, done: true }]}
    >
      <Box />
      <CheckBox onChange={handleChange} checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
      <Check>
        check:
        {check ? 'true' : 'false'}
      </Check>
    </Page>
  );
};

export default BoxPage;
