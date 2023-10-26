import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './authSlice';
import { sportsSlice } from './sportsSlice';
import { productsSlice } from './productsSlice';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { diarySlice } from './diarySlice';

const persistContactsConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authPersistReducer = persistReducer(persistContactsConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    diary: diarySlice.reducer,
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
