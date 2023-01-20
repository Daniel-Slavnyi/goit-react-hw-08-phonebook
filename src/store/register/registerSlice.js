import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './register-operetions';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
  },
});

const { actions, reducer } = registerSlice;

export default reducer;
