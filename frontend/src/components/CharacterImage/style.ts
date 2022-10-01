import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #fff;
  overflow: hidden;

  img {
    position: absolute;
    top: -25px;
    height: 80px;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
