export const selectExercises = (state) => state.dairy.exercises;
export const selectProductsCategories = (state) => state.products.productsCategories;
export const selectName = (state) => state.auth.client;
export const selectIsLoggedIn = (state) => state.auth.client.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.client.isRefreshing;

