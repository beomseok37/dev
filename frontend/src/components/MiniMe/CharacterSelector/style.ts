import styled from '@emotion/styled';

const Title = styled.p`
  display: flex;
  align-items: center;
  height: 20px;
  color: #fff;
`;

const ToggleButtonWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  position: absolute;
  left: 6px;
  width: 68px;
  height: 80px;
  overflow: hidden;
`;

export { Title, ToggleButtonWrapper, ImageWrapper };
