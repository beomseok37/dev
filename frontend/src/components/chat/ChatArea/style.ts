import styled from '@emotion/styled';

interface Props {
  open: boolean;
}

const Wrapper = styled.div<Props>`
  position: fixed;
  right: ${({ open }) => (open ? '0' : '-300px')};
  width: 300px;
  height: 100%;
  border-left: ${({ open }) => (open ? '1px solid #000' : 'unset')};
  width: 300px;
  transition: all ease 1s;
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
