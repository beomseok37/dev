/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { forwardRef, MutableRefObject } from 'react';

import { Wrapper } from './style';

interface Props {
  character: string;
  border?: string;
  isAbsolute?: boolean;
}

const CharacterImage = forwardRef(
  ({ character, border, isAbsolute }: Props, ref) =>
    ref === null ? (
      <Wrapper border={border!} isAbsolute={isAbsolute!}>
        <img src={character} alt="profile image" />
      </Wrapper>
    ) : (
      <Wrapper
        border={border!}
        isAbsolute={isAbsolute!}
        ref={ref as MutableRefObject<HTMLDivElement>}
      >
        <img src={character} alt="profile image" />
      </Wrapper>
    )
);

CharacterImage.defaultProps = {
  border: '0',
  isAbsolute: false,
};
export default CharacterImage;
