import { createSlice } from '@reduxjs/toolkit';
import { fetchAvaibleBloodProducts, fetchProducts, fetchProductsCategories } from './operations';
import { handlePending, handleReject } from './handlers';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productList: [],
    productsCategories: null,
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.productList = payload;
        state.isLoading = false;
      })
      .addCase(fetchAvaibleBloodProducts.fulfilled, (state, { payload }) => {
        state.productList = payload;
        state.isLoading = false;
      })
      .addCase(fetchProductsCategories.fulfilled, (state, { payload }) => {
        state.productsCategories = payload[0];
        state.isLoading = false;
      })
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleReject),
});
