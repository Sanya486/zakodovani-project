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

const initialState = {
  client: {
    _id: '',
    email: '',
    name: '',
    birthday: '',
    blood: null,
    currentWeight: null,
    desiredWeight: null,
    height: null,
    levelActivity: null,
    sex: '',
    avatar: '',
    BMR: null,
    timeForSport: null,
  },
  token: '',
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: true,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchSignup.fulfilled, (state, { payload }) => {
        state.client = payload.client;
        state.token = payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.client = payload.client;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.client = initialState.client;
        state.error = initialState.error;
        state.isLoading = initialState.isLoading;
        state.isLoggedIn = initialState.isLoggedIn;
        state.token = initialState.token;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.client = payload.client;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }).addCase(fetchCurrentUser.rejected, (state) => {
        state.isRefreshing = false
      })
      .addCase(fetchCalculateDailyMetrics.fulfilled, (state, { payload }) => {
        state.client = payload.client;
        state.isLoading = false;
      })
      .addCase(fetchUpload.fulfilled, (state, { payload }) => {
        if (payload.name) {
          state.client.name = payload.name;
        } else if (payload.avatar) state.client.avatar = payload.avatar;
      })
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleReject),
});
