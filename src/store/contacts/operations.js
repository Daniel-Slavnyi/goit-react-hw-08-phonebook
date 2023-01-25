import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { omit } from 'lodash';

// const usersApi = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchUsers = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewUser = createAsyncThunk(
  'contacts/addContact',
  async (userObj, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', userObj);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'contacts/deleteContact',
  async (userId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${userId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const ubdateUser = createAsyncThunk(
  'contacts/ubdateContact',
  async (objData, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `/contacts/${objData.id}`,
        omit(objData, 'id')
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
