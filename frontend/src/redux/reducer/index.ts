import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter';
import todoListReducer from './todo';

export default combineReducers({
  counter: counterReducer,
  todoList: todoListReducer,
});
