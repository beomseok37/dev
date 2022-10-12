/* eslint-disable prefer-destructuring */
import { NextPage } from 'next';

import Page from 'src/components/Page';
import Chart from 'src/components/Chart';

import { ECHARTS_PAGE_CONTENT } from 'src/constant/page';
import { scatterData } from 'src/constant/echartData';

const Echarts: NextPage = () => {
  const option1 = {
    title: {
      text: '기본 1',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
    },
    series: [
      {
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230],
      },
    ],
  };

  const option2 = {
    title: {
      text: '기본 2',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [320, 302, 301, 334, 390, 330, 320],
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [150, 212, 201, 154, 190, 330, 410],
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  //   const labelPosition = (position: number) => {
  //     return {
  //       position: `${position > 0 ? 'right' : 'left'}`,
  //     };
  //   };

  const option3 = {
    title: {
      text: 'Bar Chart with Negative Value',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      top: 80,
      bottom: 30,
    },
    xAxis: {
      type: 'value',
      position: 'top',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    yAxis: {
      type: 'category',
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: [
        'ten',
        'nine',
        'eight',
        'seven',
        'six',
        'five',
        'four',
        'three',
        'two',
        'one',
      ],
    },
    series: [
      {
        name: 'Cost',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          formatter: '{b}',
        },
        data: [
          -0.07, -0.09, 0.2, 0.44, -0.23, 0.08, -0.17, 0.47, -0.36, 0.18,
          //   { value: -0.07, label: labelPosition(-0.07) },
          //   { value: -0.09, label: labelPosition(-0.09) },
          //   { value: 0.2, label: labelPosition(0.2) },
          //   { value: 0.44, label: labelPosition(0.44) },
          //   { value: -0.23, label: labelPosition(-0.23) },
          //   { value: 0.08, label: labelPosition(0.08) },
          //   { value: -0.17, label: labelPosition(-0.17) },
          //   { value: 0.47, label: labelPosition(0.47) },
          //   { value: -0.36, label: labelPosition(-0.36) },
          //   { value: 0.18, label: labelPosition(0.18) },
        ],
      },
    ],
  };

  const option4 = {
    title: {
      text: 'Accumulated Waterfall Chart 가로 기준',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter(params: any) {
        let tar;
        if (params[1].value !== '-') {
          tar = params[1];
        } else {
          tar = params[0];
        }
        return `${tar.name}<br/>${tar.seriesName} : ${tar.value}`;
      },
    },
    legend: {
      data: ['Expenses', 'Income'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: (function () {
        const list = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i <= 11; i++) {
          list.push(`Nov ${i}`);
        }
        return list;
      })(),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Placeholder',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent',
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent',
          },
        },
        data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292],
      },
      {
        name: 'Income',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'top',
        },
        data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-'],
      },
      {
        name: 'Expenses',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'bottom',
        },
        data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203],
      },
    ],
  };
  const option5 = {
    title: {
      text: 'Accumulated Waterfall Chart 세로 기준',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['Expenses', 'Income'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: (function () {
        const list = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i <= 11; i++) {
          list.push(`Nov ${i}`);
        }
        return list;
      })(),
    },
    series: [
      {
        name: 'Placeholder',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent',
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent',
          },
        },
        data: [1292, 1495, 1856, 1689, 1511, 1376, 1376, 1530, 1245, 900, 0],
      },
      {
        name: 'Income',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'top',
        },
        data: ['-', '-', '-', 286, 178, 135, '-', '-', 393, 345, 900],
      },
      {
        name: 'Expenses',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'bottom',
        },
        data: [203, 361, 119, '-', '-', '-', 154, 108, '-', '-', '-'],
      },
    ],
  };

  const option6 = {
    title: {
      text: 'Dispersion of house price based on the area',
      left: 'center',
      top: 0,
    },
    visualMap: {
      min: 15202,
      max: 159980,
      dimension: 1,
      orient: 'vertical',
      right: 10,
      top: 'center',
      text: ['HIGH', 'LOW'],
      calculable: true,
      inRange: {
        color: ['#f2c31a', '#24b7f2'],
      },
    },
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'cross',
      },
    },
    xAxis: [
      {
        type: 'value',
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'price-area',
        type: 'scatter',
        symbolSize: 5,
        data: scatterData,
      },
    ],
  };
  return (
    <Page
      header="box"
      pageContentList={[{ content: ECHARTS_PAGE_CONTENT, done: true }]}
    >
      <Chart option={option1} />
      <Chart option={option2} />
      <Chart option={option3} />
      <Chart option={option4} />
      <Chart option={option5} />
      <Chart option={option6} />
    </Page>
  );
};

export default Echarts;
