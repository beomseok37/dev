/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';
import { UserType } from 'src/types';

interface StateType {
  user: UserType;
}

const initialState: StateType = {
  user: { username: 'me', character: '/image/character1.png' },
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
          state.user.character = '/image/character1.png';
          break;
        case 2:
          state.user.character = '/image/character2.png';
          break;
        case 3:
          state.user.character = '/image/character3.png';
          break;
        case 4:
          state.user.character = '/image/character4.png';
          break;
        case 5:
          state.user.character = '/image/character5.png';
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
