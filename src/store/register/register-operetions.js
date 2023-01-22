import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const usersApi = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
console.dir(axios);

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (objOfData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', objOfData);
      token.set(data.token);
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
      const { data } = await axios.post('/users/login', objOfData);
      token.set(data.token);
      console.dir(axios);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk('login/logOutUser', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

export const refreshCurrentUser = createAsyncThunk(
  'login/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.register.token;
    console.log(persistedToken);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {}
  }
);
