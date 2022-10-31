/* eslint-disable react/no-danger */
import { NextPage } from 'next';
import { useState, ChangeEvent, useEffect, useCallback } from 'react';
import axios from 'axios';
import * as DOMPurify from 'dompurify';

import Page from 'src/components/Page';
import Column from 'src/components/Grid/Column';
import Row from 'src/components/Grid/Row';
import Input from 'src/components/base/Input';
import Button from 'src/components/base/Button';
import DropdownMenu from 'src/components/DropdownMenu';
import Loading from 'src/components/Loading';

import { GITHUB_API_PAGE_CONTENT } from 'src/constant/page';

import { Readme, ReadmeWrapper } from 'src/styles/pages/github-api';

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

const GitHubApiPage: NextPage = () => {
  const [readme, setReadme] = useState('');
  const [username, setUsername] = useState('');
  const [repoList, setRepoList] = useState<string[]>([]);
  const [repo, setRepo] = useState('');
  const [isRepoListLoading, setIsRepoListLoading] = useState(false);
  const [isReadmeLoading, setIsReadmeLoading] = useState(false);

  const getRepoList = async () => {
    setIsRepoListLoading(true);
    setRepoList([]);
    const fetchedRepoList = await axios.get(
      `${serverURL}/v1/github/repos/${username}`
    );
    setRepoList(fetchedRepoList.data.data.map((data: any) => data.name));
  };

  const getReadme = useCallback(async () => {
    setIsReadmeLoading(true);
    setReadme('');
    const fetchedReadme = await axios.get(
      `${serverURL}/v1/github/${username}/${repo}`
    );
    setReadme(fetchedReadme.data.data);
  }, [repo, username]);

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const handleChangeRepo = (e: ChangeEvent<HTMLInputElement>) => {
    setRepo(e.currentTarget.value);
  };

  useEffect(() => {
    if (repo) {
      getReadme();
    }
  }, [getReadme, repo]);

  return (
    <Page
      header="github-api"
      pageContentList={[{ content: GITHUB_API_PAGE_CONTENT, done: true }]}
    >
      <Column padding="10px">
        <Row padding="20px">
          <Column>
            <Row
              alignItems="center"
              justifyContent="space-between"
              width="200px"
            >
              <p>username</p>
              <Input value={username} onChange={handleChangeUsername} />
            </Row>
            <Row
              alignItems="center"
              justifyContent="space-between"
              width="200px"
            >
              <p>repository</p>
              <Input value={repo} onChange={handleChangeRepo} />
            </Row>
            <Button onClick={() => getRepoList()}>찾기</Button>
          </Column>
          {isRepoListLoading && (
            <Row
              alignItems="center"
              justifyContent="space-between"
              margin="0 0 0 10px"
              width="280px"
              height="fit-content"
            >
              {repoList.length !== 0 ? (
                <>
                  <p>repository</p>
                  <DropdownMenu
                    bind={[repo, setRepo]}
                    menuList={repoList}
                    version={1}
                  />
                </>
              ) : (
                <Loading />
              )}
            </Row>
          )}
        </Row>

        {isReadmeLoading &&
          (readme ? (
            <>
              <Readme />
              <ReadmeWrapper>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(readme),
                  }}
                />
              </ReadmeWrapper>
            </>
          ) : (
            <Loading />
          ))}
      </Column>
    </Page>
  );
};

export default GitHubApiPage;
