/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';
import { UserType } from 'src/types';

import { CHARACTERURL1 } from 'src/constant/character';

interface StateType {
  user: UserType;
}

const initialState: StateType = {
  user: { username: 'undefined', character: CHARACTERURL1 },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUsername: (state, action: PayloadAction<string>) => {
      state.user.username = action.payload;
    },
    changeCharacter: (state, action: PayloadAction<string>) => {
      state.user.character = action.payload;
    },
  },
});

export const { changeUsername, changeCharacter } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
