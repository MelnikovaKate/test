import { createSlice } from '@reduxjs/toolkit';

import { AppState } from './store';
import { setAuthorizationHeaders } from 'services';

interface IAuthState {
  token?: string | null;
  username?: string | null;
}

const initialState: IAuthState = {
  token: localStorage.getItem('token'),
  username: localStorage.getItem('username')
};

export const permissionsSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    changeAuth(state: IAuthState, { payload }) {
      state.token = payload.token;
      state.username = payload.username;

      if (!!payload.token) {
        localStorage.setItem('token', payload.token);
        setAuthorizationHeaders(payload.token);
      }

      if (!!payload.username) {
        localStorage.setItem('username', payload.username);
      }
    },
  },
});

export const {
  actions: { changeAuth },
  reducer: authReducer,
} = permissionsSlice;

export const getCurrentAuth = ({ auth }: AppState) => auth;
export const changeAuthAction = (payload: IAuthState) => changeAuth(payload);
