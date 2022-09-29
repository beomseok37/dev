/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';
import { PositionType } from 'src/types';

interface StateType {
  position: PositionType;
}

const initialState: StateType = {
  position: {
    x: 250,
    y: 250,
    currentDirection: 0,
    currentLoopIndex: 0,
  },
};

export const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    savePosition: (state, action: PayloadAction<PositionType>) => {
      state.position = action.payload;
    },
  },
});

export const { savePosition } = positionSlice.actions;

export const selectPosition = (state: RootState) => state.position.position;

export default positionSlice.reducer;
