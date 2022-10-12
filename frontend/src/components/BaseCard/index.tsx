import Link from 'next/link';
import { ReactElement } from 'react';

import { Wrapper } from './style';

interface Props {
  page: string;
}

const BaseCard = ({ page }: Props): ReactElement => {
  return (
    <Link href={`/base/${page}`}>
      <Wrapper>{page}</Wrapper>
    </Link>
  );
};

export default BaseCard;
