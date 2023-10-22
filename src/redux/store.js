import { configureStore } from "@reduxjs/toolkit";

import { clientSlice } from "./clientSlice";
import { sportsSlice } from "./sportsSlice";
import { productsSlice } from "./productsSlice";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistContactsConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const authPersistReducer = persistReducer(
  persistContactsConfig,
  clientSlice.reducer
);

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    dairy: sportsSlice.reducer,
    products: productsSlice.reducer,
    sports: sportsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
