// Authenticate selectors

export const selectClient = (state) => state.auth.client;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectAvatar = (state) => state.auth.client.avatar;

// Diary selectors

export const selectDiaryExercises = (state) => state.diary.data.exerciseDone;
export const selectDiaryProducts = (state) => state.diary.data.consumedProduct;
export const selectDiaryMetrics = (state) => state.diary.data;

// Products selectors

export const selectProducts = (state) => state.products.productList;
export const selectProductsCategories = (state) => state.products.productsCategories;

// Exercises selectors

export const selectExercises = (state) => state.sports.exercises;
export const selectExeciseFilter = (state) => state.sports.filter;
