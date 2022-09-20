import styled from '@emotion/styled';

interface props {
  width: string;
  height: string;
  justifyContent: string;
  alignItems: string;
  transition: boolean;
  background: string;
  padding: string;
  position: string;
  border: string;
  borderLeft: string;
  borderRight: string;
  borderTop: string;
  borderBottom: string;
}

const Wrapper = styled.div<props>`
  display: flex;
  flex-direction: column;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  ${({ transition }) => transition && `transition: all ease 0.8s;`}
  background: ${({ background }) => background};
  padding: ${({ padding }) => padding};
  position: ${({ position }) => position};
  border: ${({ border }) => border};
  border-left: ${({ borderLeft }) => borderLeft};
  border-right: ${({ borderRight }) => borderRight};
  border-top: ${({ borderTop }) => borderTop};
  border-bottom: ${({ borderBottom }) => borderBottom};
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
