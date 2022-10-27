import axios from 'axios';

const getReadme = async (username: string) => {
  const apiData = (
    await axios.get(`https://api.github.com/repos/${username}/${username}/readme`, {
      headers: { Accept: 'application/vnd.github.html' },
    })
  ).data;
  return apiData;
};

// eslint-disable-next-line import/prefer-default-export
export { getReadme };
