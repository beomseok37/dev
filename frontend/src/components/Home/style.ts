import styled from '@emotion/styled';

interface PProps {
  fontSize?: string;
}

interface BlankProps {
  size: number;
}

const P = styled.p<PProps>`
  font-size: ${({ fontSize }) =>
    fontSize === 'big' ? `60px` : fontSize === 'medium' ? '30px' : '20px'};
`;

P.defaultProps = {
  fontSize: 'small',
};

const Blank = styled.div<BlankProps>`
  width: 1px;
  height: ${({ size }) => `${size}px`};
`;

const Callout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f1f1ef;
  border-radius: 6px;
  width: 800px;

  p {
    font-weight: normal;
  }
`;

const Code = styled.div`
  padding: 4px;
  border-radius: 6px;
  background: #e1e1df;
  color: #eb5f5f;
  font-size: 14px;
`;

const PortfolioButton = styled.div`
  margin-left: 4px;
  cursor: pointer;
`;

export { P, Blank, Callout, Code, PortfolioButton };
