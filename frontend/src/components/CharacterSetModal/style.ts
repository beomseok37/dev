import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  width: 600px;
  height: 300px;
  margin: 0 auto;
  top: 200px;
  left: 0;
  right: 0;
  background: #506ea5;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Background = styled.div`
  position: fixed;
  z-index: 1;
  inset: 0;
  background: #888;
  opacity: 0.6;
`;

export { Wrapper, Background };
