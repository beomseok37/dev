/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';
import { ChatType } from 'src/types';

interface StateType {
  chatList: ChatType[];
  newChatCount: number;
}

const initialState: StateType = {
  chatList: [],
  newChatCount: 0,
};

interface ChangeType {
  socketID: string;
  who: string;
  character: string;
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    chatIn: (state, action: PayloadAction<ChatType>) => {
      state.chatList.push(action.payload);
      state.newChatCount += 1;
    },
    changeUserInfoInChat: (state, action: PayloadAction<ChangeType>) => {
      state.chatList = state.chatList.map((chat) => {
        if (chat.socketID === action.payload.socketID) {
          return {
            ...chat,
            who: action.payload.who,
            character: action.payload.character,
          };
        }
        return chat;
      });
    },
    resetCount: (state) => {
      state.newChatCount = 0;
    },
  },
});

export const { chatIn, changeUserInfoInChat, resetCount } = chatSlice.actions;

export const selectChatList = (state: RootState) => state.chat.chatList;
export const selectNewChatCount = (state: RootState) => state.chat.newChatCount;

export default chatSlice.reducer;
