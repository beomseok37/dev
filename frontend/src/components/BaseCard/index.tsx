import Link from 'next/link';
import { ReactElement } from 'react';

import { Wrapper } from './style';

interface Props {
  page: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
}

function BaseCard({
  page,
  backgroundColor,
  hoverBackgroundColor,
}: Props): ReactElement {
  return (
    <Link href={`/study/${page}`}>
      <Wrapper
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
      >
        {page}
      </Wrapper>
    </Link>
  );
}

export default BaseCard;
