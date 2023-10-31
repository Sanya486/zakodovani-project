import { createSlice } from '@reduxjs/toolkit';
import {
  fetchDeleteExercise,
  fetchDeleteProduct,
  fetchDiaryDateInfo,
  fetchDiarySaveExercise,
  fetchDiarySaveProduct,
} from './operations';
import { handlePending, handleReject } from './handlers';

const handleMessage = (state, { payload }) => {
  state.message = payload.message;
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState: {
    data: {
      _id: '',
      clientId: '',
      _v: null,
      consumedProduct: [],
      exerciseDone: [],
    },
    message: '',
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchDiaryDateInfo.fulfilled, (state, { payload }) => {
        state.data = payload.diary;
        state.isLoading = false;
      })
      .addCase(fetchDiarySaveProduct.fulfilled, handleMessage)
      .addCase(fetchDiarySaveExercise.fulfilled, handleMessage)
      .addCase(fetchDeleteProduct.fulfilled, (state, { payload }) => {
        state.data.consumedProduct = payload;
        state.isLoading = false;
      })
      .addCase(fetchDeleteExercise.fulfilled, (state, { payload }) => {
        state.data.exerciseDone = payload;
        state.isLoading = false;
      })
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleReject),
});