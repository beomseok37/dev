import styled from '@emotion/styled';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  grid-gap: 15px;
  padding: 30px;
`;

const HorizontalLine = styled.hr`
  width: 98%;
  border: thin solid #ddd;
  margin: 0 1% 20px 1%;
`;

const Title = styled.p`
  color: #666;
  padding-left: 10px;
  font-size: 20px;
  font-weight: bolder;
`;

export { GridWrapper, HorizontalLine, Title };
