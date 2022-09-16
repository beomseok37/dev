import styled from '@emotion/styled';

interface props {
  width: string;
}

const StyledInput = styled.input<props>`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #666;
  width: ${({ width }) => width};
  font-size: 16px;
`;

// eslint-disable-next-line import/prefer-default-export
export { StyledInput };
