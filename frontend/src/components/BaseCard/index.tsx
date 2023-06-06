import Link from 'next/link';
import { ReactElement } from 'react';

import { Wrapper } from './style';

interface Props {
  page: string;
  category: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
}

function BaseCard({
  page,
  category,
  backgroundColor,
  hoverBackgroundColor,
}: Props): ReactElement {
  return (
    <Link href={`/study/${category}/${page}`}>
      <Wrapper
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        aria-label={`${page} 페이지 이동`}
      >
        {page}
      </Wrapper>
    </Link>
  );
}

export default BaseCard;
