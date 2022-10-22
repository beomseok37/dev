import { NextPage } from 'next';
import { MouseEvent, useState, useEffect } from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';

import Page from 'src/components/Page';
import DraggableBox from 'src/components/DraggableBox';
import Row from 'src/components/Grid/Row';

import { XARROW_PAGE_CONTENT } from 'src/constant/page';

import { ArrowType, ComponentObjectType } from 'src/types';

import { Button, Alarm } from 'src/styles/pages/xarrows';

const getInitialParameter = (id: string) => {
  return {
    id,
    children: [],
    parameter: {
      parameter1: `${id}'s default parameter1`,
      parameter2: `${id}'s default parameter2`,
    },
  };
};

const XArrowPage: NextPage = () => {
  const [idCount, setIdCount] = useState(1);
  const [startArrow, setStartArrow] = useState('');
  const [endArrow, setEndArrow] = useState('');
  const [canHandleArrowAdd, setCanHandleArrowAdd] = useState(false);
  const [selectedArrowCount, setSelectedArrowCount] = useState(0);
  const [parameterObject, setParameterObject] = useState<ComponentObjectType>(
    {}
  );
  const [arrowList, setArrowList] = useState<ArrowType[]>([]);
  const [isJsonShow, setIsJsonShow] = useState(false);

  useEffect(() => {
    if (selectedArrowCount === 2) {
      setArrowList((prevArrowList) => {
        return [...prevArrowList, { startArrow, endArrow }];
      });
      setParameterObject((prevParameterObject) => {
        const newParameterObject = { ...prevParameterObject };
        newParameterObject[startArrow].children.push(endArrow);
        return { ...newParameterObject };
      });
      setStartArrow('');
      setEndArrow('');
      setSelectedArrowCount(0);
      setCanHandleArrowAdd(false);
    }
  }, [endArrow, selectedArrowCount, startArrow]);

  const handleAddComponent = () => {
    setParameterObject((prevParameterObject) => {
      const newParameterObject = { ...prevParameterObject };
      newParameterObject[`component${idCount}`] = getInitialParameter(
        `component${idCount}`
      );
      return { ...newParameterObject };
    });
    setIdCount(idCount + 1);
  };

  const handleAddArrow = () => {
    setCanHandleArrowAdd(!canHandleArrowAdd);
    if (startArrow) {
      setStartArrow('');
      setSelectedArrowCount(0);
    }
  };

  const handleClickBox = (e: MouseEvent<HTMLDivElement>) => {
    if (canHandleArrowAdd && selectedArrowCount === 0) {
      setStartArrow(e.currentTarget.id);
      setSelectedArrowCount(1);
    } else if (canHandleArrowAdd && selectedArrowCount === 1) {
      setEndArrow(e.currentTarget.id);
      setSelectedArrowCount(2);
    }
  };

  const handleSaveParameter = (
    id: string,
    parameter1: string,
    parameter2: string
  ) => {
    setParameterObject((prevParameterObject) => {
      const newParameterObject = { ...prevParameterObject };
      newParameterObject[`${id}`].parameter = { parameter1, parameter2 };
      return { ...newParameterObject };
    });
  };

  const handleClickJsonShow = () => {
    setIsJsonShow(true);
  };
  const handleClickJsonDisappear = () => {
    setIsJsonShow(false);
  };
  return (
    <Page
      header="XArrows practice"
      pageContentList={[{ content: XARROW_PAGE_CONTENT, done: false }]}
    >
      <Row alignItems="center">
        {isJsonShow ? (
          <Button type="button" onClick={handleClickJsonDisappear}>
            가리기
          </Button>
        ) : (
          <Button type="button" onClick={handleClickJsonShow}>
            Parameter JSON 출력
          </Button>
        )}

        <Button type="button" onClick={handleAddComponent}>
          컴포넌트 추가
        </Button>
        {canHandleArrowAdd ? (
          <Button type="button" onClick={handleAddArrow}>
            취소
          </Button>
        ) : (
          <Button type="button" onClick={handleAddArrow}>
            arrow 추가
          </Button>
        )}
        {canHandleArrowAdd && <Alarm>arrow 추가중...</Alarm>}
      </Row>
      <Row height="300px" borderBottom="1px solid #888">
        <Xwrapper>
          {Object.keys(parameterObject).map((id, index) => (
            <DraggableBox
              key={id + index.toString()}
              component={parameterObject[id]}
              onClick={handleClickBox}
              onSaveParameter={handleSaveParameter}
            />
          ))}
          {arrowList.map((arrow, index) => (
            <Xarrow
              key={arrow.startArrow + arrow.endArrow + index.toString()}
              start={arrow.startArrow}
              end={arrow.endArrow}
              color="#1F2556"
              headSize={4}
              curveness={0}
            />
          ))}
        </Xwrapper>
      </Row>

      {isJsonShow && <pre>{JSON.stringify(parameterObject, null, 2)}</pre>}
    </Page>
  );
};

export default XArrowPage;
