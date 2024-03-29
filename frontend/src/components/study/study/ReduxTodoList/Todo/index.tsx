import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import {
  ImCheckboxUnchecked,
  ImCheckboxChecked,
  ImCancelCircle,
} from 'react-icons/im';
import { BsCheckCircle } from 'react-icons/bs';

import Row from 'src/components/base/Grid/Row';

import { TodoType } from 'src/types';

import { remove, check } from 'src/redux/reducer/todo';

import { Title, TodoWrapper, IconButton } from './style';

interface props {
  todo: TodoType;
}

function Todo({ todo }: props): ReactElement {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(check(todo));
  };
  const handleRemove = () => {
    dispatch(remove(todo.work));
  };
  return (
    <TodoWrapper check={todo.check}>
      <Row alignItems="center">
        {todo.check ? (
          <ImCheckboxChecked size={12} />
        ) : (
          <ImCheckboxUnchecked size={12} />
        )}
        <Title>{todo.work}</Title>
      </Row>
      <Row>
        <IconButton done check={todo.check} aria-label="done 버튼">
          <BsCheckCircle onClick={handleCheck} />
        </IconButton>
        <IconButton
          onClick={handleRemove}
          check={todo.check}
          aria-label="cancel 버튼"
        >
          <ImCancelCircle />
        </IconButton>
      </Row>
    </TodoWrapper>
  );
}

export default Todo;
