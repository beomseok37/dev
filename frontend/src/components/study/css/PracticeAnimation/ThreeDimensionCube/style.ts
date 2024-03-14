import styled from '@emotion/styled';

interface props {
  rotateY?: string;
  rotateX?: string;
  rotateZ?: string;
  color: string;
}

const Scene = styled.div`
  width: 300px;
  height: 100px;
  padding: 50px;
  perspective: 400px;
`;

const Rotate = styled.div`
  box-sizing: border-box;
  transform-style: preserve-3d;
`;

const MoveBox = styled.div<props>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  transition: all ease 0.5s;
  transform: ${({ rotateX, rotateY }) =>
    rotateX
      ? `rotateY(${rotateY}deg) rotateX(${rotateX}) translateZ(50px)`
      : `rotateY(${rotateY}deg) translateZ(50px)`};
  background: ${({ color }) => color};
  opacity: 0.8;
`;

export { MoveBox, Rotate, Scene };
