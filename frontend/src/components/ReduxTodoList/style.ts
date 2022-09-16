import styled from '@emotion/styled';

interface NumberProps {
  done?: boolean;
}

const TodoList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #000;
  border-radius: 4px;
`;

const Title = styled.p`
  position: absolute;
  top: -12px;
  background: #fff;
  padding: 4px;
`;

const P = styled.p`
  margin-right: 4px;
`;

const Number = styled.p<NumberProps>`
  color: ${({ done }) => (done ? `#0A6E0A` : `	#B91A4D`)};
`;

Number.defaultProps = {
  done: false,
};

export { P, Number, TodoList, Title };
