import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const usersApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (objOfData, thunkAPI) => {
    try {
      const { data } = await usersApi.post('/users/signup', objOfData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (objOfData, thunkAPI) => {
    try {
      const { data } = await usersApi.post('/users/login', objOfData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
