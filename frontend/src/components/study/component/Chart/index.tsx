import { ReactElement } from 'react';
import ReactECharts from 'echarts-for-react';

import { Wrapper } from './style';

interface Props {
  option: any;
}

function Chart({ option }: Props): ReactElement {
  return (
    <Wrapper>
      <ReactECharts
        option={option}
        style={{
          width: '100%',
          height: '260px',
          marginTop: '0px',
          marginBottom: '0px',
        }}
      />
    </Wrapper>
  );
}

export default Chart;
