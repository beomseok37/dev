import styled from '@emotion/styled';

interface Props {
  isDetected: boolean;
}

const SlideInWhenDetected = styled.div<Props>`
  transition: all 1s;
  transform: ${({ isDetected }) =>
    isDetected ? `translate(0)` : `translate(80px)`};
  opacity: ${({ isDetected }) => (isDetected ? `1` : `0`)};
`;

export default SlideInWhenDetected;
