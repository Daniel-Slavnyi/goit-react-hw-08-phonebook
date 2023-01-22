import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './register/registerSlice';
import contactsReducer from './contacts/contactsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  whitelist: ['token'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, registerReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    register: persistedReducer,
    filter: {},
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
