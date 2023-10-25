import { createSlice } from '@reduxjs/toolkit';

export const dairySlice = createSlice({
  name: 'dairy',
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
