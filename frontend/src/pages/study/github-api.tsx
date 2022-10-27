/* eslint-disable react/no-danger */
import { NextPage } from 'next';
import axios from 'axios';
import * as DOMPurify from 'dompurify';

import Page from 'src/components/Page';

import { GITHUB_API_PAGE_CONTENT } from 'src/constant/page';
import { useState, useEffect } from 'react';

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

const GitHubApiPage: NextPage = () => {
  const [readme, setReadme] = useState('');
  const getData = async () => {
    const readmeData = await axios.get(`${serverURL}/v1/readme/beomseok37`);
    setReadme(readmeData.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Page
      header="animation"
      pageContentList={[{ content: GITHUB_API_PAGE_CONTENT, done: true }]}
    >
      {readme && (
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(readme) }} />
      )}
    </Page>
  );
};

export default GitHubApiPage;
