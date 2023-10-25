import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, fetchLogin, fetchLogout, fetchSignup } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    client: {
      email: '',
      name: '',
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
      .addCase(fetchSignup.pending, handlePending)
      .addCase(fetchSignup.fulfilled, (state, { payload }) => {
        state.client = payload.client;
        state.token = payload.token;
        state.isLoading = false;
      })
      .addCase(fetchSignup.rejected, handleReject)
      .addCase(fetchLogin.pending, handlePending)
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.client = payload.client;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = true;
      })
      .addCase(fetchLogin.rejected, handleReject)
      .addCase(fetchLogout.pending, handlePending)
      .addCase(fetchLogout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isRefreshing = false;
        state.token = '';
      })
      .addCase(fetchLogout.rejected, handleReject)
      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.client = payload;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, handleReject),
});
