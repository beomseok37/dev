import styled from '@emotion/styled';

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
  padding: 10px;
`;

export default ButtonGroup;
