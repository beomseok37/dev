import styled from '@emotion/styled';

interface props {
  width: string;
  height: string;
  justifyContent: string;
  alignItems: string;
  margin: string;
  padding: string;
  background: string;
  position: string;
  border: string;
  borderLeft: string;
  borderRight: string;
  borderTop: string;
  borderBottom: string;
}

const Wrapper = styled.div<props>`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background};
  position: ${({ position }) => position};
  border-left: ${({ border, borderLeft }) =>
    border !== 'unset' ? border : borderLeft};
  border-right: ${({ border, borderRight }) =>
    border !== 'unset' ? border : borderRight};
  border-top: ${({ border, borderTop }) =>
    border !== 'unset' ? border : borderTop};
  border-bottom: ${({ border, borderBottom }) =>
    border !== 'unset' ? border : borderBottom};
  box-sizing: border-box;
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
