import styled from '@emotion/styled';

interface props {
  width: string;
  height: string;
  justifyContent: string;
  alignItems: string;
  transition: boolean;
  padding: string;
  background: string;
  position: string;
}

const Wrapper = styled.div<props>`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  ${({ transition }) => transition && `transition: all ease 0.8s;`}
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background};
  position: ${({ position }) => position};
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
