import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCalculateDailyMetrics,
  fetchCurrentUser,
  fetchLogin,
  fetchLogout,
  fetchSignup,
  fetchUpload,
} from './operations';

import { handlePending, handleReject } from './handlers';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    client: {
      email: '',
      name: '',
    },
    clientData: {
      birthday: '',
      blood: null,
      currentWeight: null,
      desiredWeight: null,
      height: null,
      levelActivity: null,
      sex: '',
      avatar: '',
    },
    token: '',
    isLoading: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchSignup.fulfilled, (state, { payload }) => {
        state.client = payload.client;
        state.token = payload.token;
        state.isLoading = false;
      })
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.client = payload.client;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = true;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isRefreshing = false;
        state.token = '';
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.client = payload;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCalculateDailyMetrics.fulfilled, (state, { payload }) => {
        state.clientData = payload;
        state.isLoading = false;
      })
      .addCase(fetchUpload.fulfilled, (state) => state)
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleReject),
});
