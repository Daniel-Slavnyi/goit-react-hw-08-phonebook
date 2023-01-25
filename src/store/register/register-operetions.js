import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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

const notifyLogin = () => toast.success('Your enter is succsess');

const notifyErrorLogin = () =>
  toast.error('Check please if the password or email is correct');

const notifySuccess = () => toast.success('Your register is success');

const notifyError = () =>
  toast.error('It looks like user is already registered');

export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (objOfData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', objOfData);
      token.set(data.token);
      notifySuccess();
      return data;
    } catch (error) {
      notifyError();
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
      notifyLogin();
      return data;
    } catch (error) {
      notifyErrorLogin();
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
