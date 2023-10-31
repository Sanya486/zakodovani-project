import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleReject } from './handlers';
import { fetchStatistic } from './operations';

export const statisticsSlice = createSlice({
  name: 'statistic',
  initialState: {
    trainingsQuantity: 0,
    burnedAllUsersCalories: 0,
    registeredUsersCount: 0,
    spentAllUsersTime: 0,
    totalUsersExercisesCount: 0,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchStatistic.fulfilled, (state, { payload }) => {
        state.trainingsQuantity = payload.trainingsQuantity;
        state.burnedAllUsersCalories = payload.burnedAllUsersCalories;
        state.registeredUsersCount = payload.registeredUsersCount;
        state.spentAllUsersTime = payload.spentAllUsersTime;
        state.totalUsersExercisesCount = payload.totalUsersExercisesCount;
      })
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleReject),
});
