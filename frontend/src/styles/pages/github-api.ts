import styled from '@emotion/styled';

const Readme = styled.p`
  &:after {
    margin-left: 20px;
    content: 'README';
  }
  font-size: 40px;
`;
const ReadmeWrapper = styled.div`
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #aaa;
`;

export { Readme, ReadmeWrapper };
