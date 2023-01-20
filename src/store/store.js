import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './register/registerSlice';

export const store = configureStore({
  reducer: {
    contacts: {},
    logIn: {},
    register: registerReducer,
    filter: {},
  },
});
