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
      consumedProduct: [
          {
            _id: {
              $oid: '5d51694902b2373622ff5773',
            },
            weight: 100,
            calories: 340,
            category: 'dairy',
            title: 'Danbo cheese',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b7f',
            },
            weight: 100,
            calories: 112,
            category: 'fish',
            title: 'marlin',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5e13',
            },
            weight: 100,
            calories: 17,
            category: 'vegetables and herbs',
            title: 'Salads Belaya Dacha Delicate root',
            recommend: 'No',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b6f',
            },
            weight: 100,
            calories: 160,
            category: 'fish',
            title: 'Cold smoked bream',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b8d',
            },
            weight: 100,
            calories: 281,
            category: 'fish',
            title: 'Pollock in batter',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff590d',
            },
            weight: 100,
            calories: 232,
            category: 'meat',
            title: 'Lamb ham',
            recommend: 'No',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5773',
            },
            weight: 100,
            calories: 340,
            category: 'dairy',
            title: 'Danbo cheese',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b7f',
            },
            weight: 100,
            calories: 112,
            category: 'fish',
            title: 'marlin',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5e13',
            },
            weight: 100,
            calories: 17,
            category: 'vegetables and herbs',
            title: 'Salads Belaya Dacha Delicate root',
            recommend: 'No',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b6f',
            },
            weight: 100,
            calories: 160,
            category: 'fish',
            title: 'Cold smoked bream',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b8d',
            },
            weight: 100,
            calories: 281,
            category: 'fish',
            title: 'Pollock in batter',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff590d',
            },
            weight: 100,
            calories: 232,
            category: 'meat',
            title: 'Lamb ham',
            recommend: 'No',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5773',
            },
            weight: 100,
            calories: 340,
            category: 'dairy',
            title: 'Danbo cheese',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b7f',
            },
            weight: 100,
            calories: 112,
            category: 'fish',
            title: 'marlin',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5e13',
            },
            weight: 100,
            calories: 17,
            category: 'vegetables and herbs',
            title: 'Salads Belaya Dacha Delicate root',
            recommend: 'No',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b6f',
            },
            weight: 100,
            calories: 160,
            category: 'fish',
            title: 'Cold smoked bream',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b8d',
            },
            weight: 100,
            calories: 281,
            category: 'fish',
            title: 'Pollock in batter',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff590d',
            },
            weight: 100,
            calories: 232,
            category: 'meat',
            title: 'Lamb ham',
            recommend: 'No',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5773',
            },
            weight: 100,
            calories: 340,
            category: 'dairy',
            title: 'Danbo cheese',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b7f',
            },
            weight: 100,
            calories: 112,
            category: 'fish',
            title: 'marlin',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5e13',
            },
            weight: 100,
            calories: 17,
            category: 'vegetables and herbs',
            title: 'Salads Belaya Dacha Delicate root',
            recommend: 'No',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b6f',
            },
            weight: 100,
            calories: 160,
            category: 'fish',
            title: 'Cold smoked bream',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b8d',
            },
            weight: 100,
            calories: 281,
            category: 'fish',
            title: 'Pollock in batter',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff590d',
            },
            weight: 100,
            calories: 232,
            category: 'meat',
            title: 'Lamb ham',
            recommend: 'No',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5773',
            },
            weight: 100,
            calories: 340,
            category: 'dairy',
            title: 'Danbo cheese',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b7f',
            },
            weight: 100,
            calories: 112,
            category: 'fish',
            title: 'marlin',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5e13',
            },
            weight: 100,
            calories: 17,
            category: 'vegetables and herbs',
            title: 'Salads Belaya Dacha Delicate root',
            recommend: 'No',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b6f',
            },
            weight: 100,
            calories: 160,
            category: 'fish',
            title: 'Cold smoked bream',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b8d',
            },
            weight: 100,
            calories: 281,
            category: 'fish',
            title: 'Pollock in batter',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff590d',
            },
            weight: 100,
            calories: 232,
            category: 'meat',
            title: 'Lamb ham',
            recommend: 'No',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5773',
            },
            weight: 100,
            calories: 340,
            category: 'dairy',
            title: 'Danbo cheese',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b7f',
            },
            weight: 100,
            calories: 112,
            category: 'fish',
            title: 'marlin',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5e13',
            },
            weight: 100,
            calories: 17,
            category: 'vegetables and herbs',
            title: 'Salads Belaya Dacha Delicate root',
            recommend: 'No',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b6f',
            },
            weight: 100,
            calories: 160,
            category: 'fish',
            title: 'Cold smoked bream',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff5b8d',
            },
            weight: 100,
            calories: 281,
            category: 'fish',
            title: 'Pollock in batter',
            recommend: 'Yes',
          },
          {
            _id: {
              $oid: '5d51694902b2373622ff590d',
            },
            weight: 100,
            calories: 232,
            category: 'meat',
            title: 'Lamb ham',
            recommend: 'No',
          },
      ],
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
      .addCase(fetchDeleteProduct.fulfilled, handleMessage)
      .addCase(fetchDeleteExercise.fulfilled, handleMessage)
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleReject),
});