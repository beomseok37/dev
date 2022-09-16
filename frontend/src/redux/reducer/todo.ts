/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';
import TodoType from 'src/types/toDo';

interface StateType {
  todoList: TodoType[];
}

const initialState: StateType = { todoList: [] };

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoType>) => {
      state.todoList.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.work !== action.payload
      );
    },
    check: (state, action: PayloadAction<TodoType>) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.work === action.payload.work) {
          todo.check = !todo.check;
        }
        return todo;
      });
    },
    removeAll: (state) => {
      const newTodoList = state.todoList.filter((todo) => !todo.check);
      if (newTodoList.length !== state.todoList.length) {
        state.todoList = newTodoList;
      }
    },
  },
});

export const { add, remove, check, removeAll } = todoListSlice.actions;

export const selectTodoList = (state: RootState) => state.todoList.todoList;

export default todoListSlice.reducer;
