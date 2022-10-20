import { ReactElement } from 'react';

import { Loader } from './style';

interface Props {
  isCenter?: boolean;
}

function Loading({ isCenter }: Props): ReactElement {
  return <Loader isCenter={isCenter!} />;
}

Loading.defaultProps = {
  isCenter: false,
};

export default Loading;
