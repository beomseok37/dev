import styled from '@emotion/styled';

const Button = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: transparent;
  border-radius: 8px;
  border: 1px solid #bbb;
  &:hover {
    background: #eee;
  }
  & + & {
    margin-left: 5px;
  }
  mjx-container[jax='SVG'][display='true'] {
    display: unset;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Button };
