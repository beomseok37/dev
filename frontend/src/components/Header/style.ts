import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  height: 5rem;
  padding: 0 1rem;
`;

const Title = styled.a`
  font-size: 28px;
  &:hover {
    cursor: pointer;
  }
`;

export { Wrapper, Title };
