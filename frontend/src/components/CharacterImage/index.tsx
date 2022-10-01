/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { ReactElement } from 'react';

import { Wrapper } from './style';

interface Props {
  character: string;
}

const CharacterImage = ({ character }: Props): ReactElement => {
  return (
    <Wrapper>
      <img src={character} alt="profile image" />
    </Wrapper>
  );
};

export default CharacterImage;
