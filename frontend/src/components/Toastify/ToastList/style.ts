import styled from '@emotion/styled';

interface WrapperProps {
  position: 'Left-Top' | 'Left-Bottom' | 'Right-Top' | 'Right-Bottom';
}

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  ${({ position }) =>
    position.split('-')[0] === 'Left' ? 'left:10px' : 'right:210px'};
  ${({ position }) =>
    position.split('-')[1] === 'Top' ? 'top' : 'Bottom'}:10px;
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
