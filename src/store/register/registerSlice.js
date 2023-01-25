import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logOutUser,
  refreshCurrentUser,
} from './register-operetions';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOutUser.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isLoggedIn = true;
      });
  },
});

const { reducer } = registerSlice;

export default reducer;
