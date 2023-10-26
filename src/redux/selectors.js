// Authenticate selectors

export const selectName = (state) => state.auth.client;
export const selectIsLoggedIn = (state) => state.auth.client.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.client.isRefreshing;

// Diary selectors

export const selectDiaryExercises = (state) => state.diary.exercises;
export const selectDiaryProducts = (state) => state.diary.data.consumedProduct;

// Products selectors

export const selectProducts = (state) => state.products.productList;
export const selectProductsCategories = (state) => state.products.productsCategories;

// Exercises selectors

export const selectExercises = (state) => state.sports.exercises;
export const selectExeciseFilter = (state) => state.sports.filter;
