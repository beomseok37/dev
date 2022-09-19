import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter';
import todoListReducer from './todo';
import userReducer from './user';

export default combineReducers({
  counter: counterReducer,
  todoList: todoListReducer,
  user: userReducer,
});
