import styled from '@emotion/styled';

const AnimationButtonWrapper = styled.div`
  width: 120px;
  height: 80px;
`;

const HoverAnimationButton = styled.button`
  width: 80px;
  height: 60px;
  transition: width linear 0.25s;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    width: 100px;
    background: orange;
  }
`;

const InputAnimationButton = styled.button`
  width: 80px;
  height: 60px;
`;

export { AnimationButtonWrapper, HoverAnimationButton, InputAnimationButton };
