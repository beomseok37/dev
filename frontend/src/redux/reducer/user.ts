/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';
import { UserType } from 'src/types';

import {
  CHARACTERURL1,
  CHARACTERURL2,
  CHARACTERURL3,
  CHARACTERURL4,
  CHARACTERURL5,
} from 'src/constant/character';

interface StateType {
  user: UserType;
}

const initialState: StateType = {
  user: { username: 'me', character: CHARACTERURL1 },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUsername: (state, action: PayloadAction<string>) => {
      state.user.username = action.payload;
    },
    changeCharacter: (state, action: PayloadAction<number>) => {
      switch (action.payload) {
        case 1:
          state.user.character = CHARACTERURL1;
          break;
        case 2:
          state.user.character = CHARACTERURL2;
          break;
        case 3:
          state.user.character = CHARACTERURL3;
          break;
        case 4:
          state.user.character = CHARACTERURL4;
          break;
        case 5:
          state.user.character = CHARACTERURL5;
          break;
        default:
          break;
      }
    },
  },
});

export const { changeUsername, changeCharacter } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
