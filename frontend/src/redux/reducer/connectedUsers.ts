/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';
import { SocketUserInfoType } from 'src/types';

interface StateType {
  connectedUsers: SocketUserInfoType[];
}

interface ChangeUsernameProps {
  socketID: string;
  username: string;
}

interface ChangeCharacterProps {
  socketID: string;
  character: string;
}

const initialState: StateType = {
  connectedUsers: [],
};

export const connectedUsersSlice = createSlice({
  name: 'connectedUsers',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<SocketUserInfoType>) => {
      console.log(action.payload);
      state.connectedUsers.push(action.payload);
    },
    logout: (state, action: PayloadAction<string>) => {
      state.connectedUsers = state.connectedUsers.filter(
        (connectedUser) => connectedUser.socketID !== action.payload
      );
    },
    move: (state, action: PayloadAction<SocketUserInfoType>) => {
      state.connectedUsers = state.connectedUsers.map((connectedUser) => {
        if (connectedUser.socketID === action.payload.socketID) {
          return action.payload;
        }
        return connectedUser;
      });
    },
    changeUsername: (state, action: PayloadAction<ChangeUsernameProps>) => {
      state.connectedUsers = state.connectedUsers.map((connectedUser) => {
        if (connectedUser.socketID === action.payload.socketID) {
          return {
            ...connectedUser,
            username: action.payload.username,
          };
        }
        return connectedUser;
      });
    },
    changeCharacter: (state, action: PayloadAction<ChangeCharacterProps>) => {
      state.connectedUsers = state.connectedUsers.map((connectedUser) => {
        if (connectedUser.socketID === action.payload.socketID) {
          connectedUser.character = action.payload.character;
          return {
            ...connectedUser,
            character: action.payload.character,
          };
        }
        return connectedUser;
      });
    },
  },
});

export const { login, logout, move, changeUsername, changeCharacter } =
  connectedUsersSlice.actions;

export const selectConnectedUsers = (state: RootState) =>
  state.connectedUsers.connectedUsers;

export default connectedUsersSlice.reducer;
