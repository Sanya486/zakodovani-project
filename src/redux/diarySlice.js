import { createSlice } from '@reduxjs/toolkit';

export const dairySlice = createSlice({
  name: 'diary',
  initialState: {
    _id: '',
    clientId: '',
    _v: null,
    consumedProduct: [],
    exerciseDone: []
  },
  reducers: {},
  extraReducers: {},
});
