import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter';
import todoListReducer from './todo';
import userReducer from './user';
import wholeChatReducer from './chat';

export default combineReducers({
  counter: counterReducer,
  todoList: todoListReducer,
  user: userReducer,
  wholeChat: wholeChatReducer,
});
