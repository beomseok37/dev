import { FormEvent, ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Column from 'src/components/base/Grid/Column';
import Row from 'src/components/base/Grid/Row';

import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
} from 'src/redux/reducer/counter';

import { Count, Button, Input } from './style';

function ReduxCounter(): ReactElement {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [amount, setAmount] = useState(1);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setAmount(+e.currentTarget.value);
  };

  return (
    <Column padding="36px" height="fit-content">
      <Count>count: {count}</Count>
      <Row padding="20px">
        <Button onClick={() => dispatch(increment())} aria-label="더하기 버튼">
          +
        </Button>
        <Button onClick={() => dispatch(decrement())} aria-label="빼기 버튼">
          -
        </Button>
      </Row>
      <Row>
        <Input onChange={handleChange} type="number" value={amount} />
        <Button onClick={() => dispatch(incrementByAmount(+amount))} big>
          Amount plus
        </Button>
      </Row>
    </Column>
  );
}

export default ReduxCounter;
