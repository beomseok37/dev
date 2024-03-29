/* eslint-disable prefer-destructuring */
import { NextPage } from 'next';
import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

import Page from 'src/components/Page';
import Loading from 'src/components/Loading';

import { ECHARTS_PAGE_CONTENT } from 'src/constant/page';

const DynamicChart = dynamic(
  () => import('src/components/study/component/Chart'),
  {
    suspense: true,
  }
);

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

const Echarts: NextPage = () => {
  const [option1, setOption1] = useState<any>({});
  const [option2, setOption2] = useState<any>({});
  const [option3, setOption3] = useState<any>({});
  const [option4, setOption4] = useState<any>({});
  const [option5, setOption5] = useState<any>({});
  const [option6, setOption6] = useState<any>({});
  async function optionApi() {
    const fetch1 = fetch(`${serverURL}/v1/chart/1`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const fetch2 = fetch(`${serverURL}/v1/chart/2`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const fetch3 = fetch(`${serverURL}/v1/chart/3`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const fetch4 = fetch(`${serverURL}/v1/chart/4`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const fetch5 = fetch(`${serverURL}/v1/chart/5`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const fetch6 = fetch(`${serverURL}/v1/chart/6`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const [response1, response2, response3, response4, response5, response6] =
      await Promise.all([fetch1, fetch2, fetch3, fetch4, fetch5, fetch6]);
    const [
      realResponse1,
      realResponse2,
      realResponse3,
      realResponse4,
      realResponse5,
      realResponse6,
    ] = await Promise.all([
      response1.json(),
      response2.json(),
      response3.json(),
      response4.json(),
      response5.json(),
      response6.json(),
    ]);
    setOption1(realResponse1);
    setOption2(realResponse2);
    setOption3(realResponse3);
    setOption4(realResponse4);
    setOption5(realResponse5);
    setOption6(realResponse6);
  }
  useEffect(() => {
    optionApi();
  }, []);

  return (
    <Page
      header="echarts"
      pageContentList={[{ content: ECHARTS_PAGE_CONTENT, done: true }]}
    >
      <Suspense fallback={<Loading isCenter />}>
        {option1 && <DynamicChart option={option1} />}
        {option2 && <DynamicChart option={option2} />}
        {option3 && <DynamicChart option={option3} />}
        {option4 && <DynamicChart option={option4} />}
        {option5 && <DynamicChart option={option5} />}
        {option6 && <DynamicChart option={option6} />}
      </Suspense>
    </Page>
  );
};

export default Echarts;
