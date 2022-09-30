/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';
import { ChatType } from 'src/types';

interface StateType {
  chatList: ChatType[];
}

const initialState: StateType = {
  chatList: [],
};

interface ChangeType {
  socketID: string;
  who: string;
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    chatIn: (state, action: PayloadAction<ChatType>) => {
      state.chatList.push(action.payload);
    },
    changeUsernameInChat: (state, action: PayloadAction<ChangeType>) => {
      state.chatList = state.chatList.map((chat) => {
        if (chat.socketID === action.payload.socketID) {
          return { ...chat, who: action.payload.who };
        }
        return chat;
      });
    },
  },
});

export const { chatIn, changeUsernameInChat } = chatSlice.actions;

export const selectChatList = (state: RootState) => state.chat.chatList;

export default chatSlice.reducer;
