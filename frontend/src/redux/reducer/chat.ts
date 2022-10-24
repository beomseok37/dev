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

export const wholeChatSlice = createSlice({
  name: 'wholeChatSlice',
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

export const { chatIn, changeUserInfoInChat, resetCount } =
  wholeChatSlice.actions;

export const selectWholeChatList = (state: RootState) =>
  state.wholeChat.chatList;
export const selectNewWholeChatCount = (state: RootState) =>
  state.wholeChat.newChatCount;

export default wholeChatSlice.reducer;
