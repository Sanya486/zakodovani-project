// Authenticate selectors

export const selectName = (state) => state.auth.client;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsBMR = (state) => state.auth.client.BMR;
export const selectIsTimeForSport = (state) => state.auth.client.timeForSport;
export const selectNameS = (state) => state.auth.client.name;
export const selectEmail = (state) => state.auth.client.email;




// Diary selectors

export const selectDiaryExercises = (state) => state.diary.exercises;
export const selectDiaryProducts = (state) => state.diary.data.consumedProduct;

// Products selectors

export const selectProducts = (state) => state.products.productList;
export const selectProductsCategories = (state) => state.products.productsCategories;

// Exercises selectors

export const selectExercises = (state) => state.sports.exercises;
export const selectExeciseFilter = (state) => state.sports.filter;
