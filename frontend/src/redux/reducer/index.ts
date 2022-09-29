import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter';
import todoListReducer from './todo';
import userReducer from './user';
import connectedUsersReducer from './connectedUsers';
import positionReducer from './position';

export default combineReducers({
  counter: counterReducer,
  todoList: todoListReducer,
  user: userReducer,
  connectedUsers: connectedUsersReducer,
  position: positionReducer,
});
