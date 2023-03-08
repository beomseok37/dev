/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';
import { ChatType } from 'src/types';

interface StateType {
  mainChatList: ChatType[];
  minimeChatList: ChatType[];
  newChatCount: number;
}

const initialState: StateType = {
  mainChatList: [],
  minimeChatList: [],
  newChatCount: 0,
};

interface ChangeType {
  socketID: string;
  who: string;
  character?: string;
}

export const wholeChatSlice = createSlice({
  name: 'wholeChatSlice',
  initialState,
  reducers: {
    mainChatIn: (state, action: PayloadAction<ChatType>) => {
      state.mainChatList.push(action.payload);
      state.newChatCount += 1;
    },
    minimeChatIn: (state, action: PayloadAction<ChatType>) => {
      state.minimeChatList.push(action.payload);
    },
    changeUserInfoInChat: (state, action: PayloadAction<ChangeType>) => {
      state.mainChatList = state.mainChatList.map((chat) => {
        if (chat.socketID === action.payload.socketID) {
          return {
            ...chat,
            who: action.payload.who,
            character: action.payload.character,
          };
        }
        return chat;
      });
      state.minimeChatList = state.minimeChatList.map((chat) => {
        if (chat.socketID === action.payload.socketID) {
          return {
            ...chat,
            who: action.payload.who,
          };
        }
        return chat;
      });
    },
    changeMyInfoInChat: (state, action: PayloadAction<ChangeType>) => {
      state.minimeChatList = state.minimeChatList.map((chat) => {
        if (chat.socketID === action.payload.socketID) {
          return {
            ...chat,
            who: action.payload.who,
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

export const {
  mainChatIn,
  minimeChatIn,
  changeUserInfoInChat,
  resetCount,
  changeMyInfoInChat,
} = wholeChatSlice.actions;

export const selectMainChatList = (state: RootState) =>
  state.wholeChat.mainChatList;
export const selectNewMainChatCount = (state: RootState) =>
  state.wholeChat.newChatCount;
export const selectMinimeChatList = (state: RootState) =>
  state.wholeChat.minimeChatList;

export default wholeChatSlice.reducer;
