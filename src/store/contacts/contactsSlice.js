import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, addNewUser, deleteUser } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addNewUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [action.payload, ...state.items];
        console.log(action);
      })
      .addCase(addNewUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(user => user.id !== action.payload.id);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

const { reducer } = contactSlice;

export default reducer;
