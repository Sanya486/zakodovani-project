import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleReject } from './handlers';
import { fetchExercises, fetchExercisesByName, fetchExercisesTypes } from './operations';

export const sportsSlice = createSlice({
  name: 'sports',
  initialState: {
    exercises: [],
    filter: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchExercises.fulfilled, (state, { payload }) => {
        state.exercises = payload;
        state.isLoading = false;
      })
      .addCase(fetchExercisesTypes.fulfilled, (state, { payload }) => {
        state.filter = payload;
        state.isLoading = false;
      })
      .addCase(fetchExercisesByName.fulfilled, (state, { payload }) => {
        state.exercises = payload;
        state.isLoading = false;
      })
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleReject),
});
