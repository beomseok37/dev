import axios from 'axios';

const getRepoList = async (username: string) => {
  const apiData = (
    await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: { Accept: 'application/vnd.github.html' },
    })
  ).data;
  return apiData;
};

const getReadme = async (username: string, repo: string) => {
  const apiData = (
    await axios.get(`https://api.github.com/repos/${username}/${repo}/readme`, {
      headers: { Accept: 'application/vnd.github.html' },
    })
  ).data;
  return apiData;
};

export { getReadme, getRepoList };
