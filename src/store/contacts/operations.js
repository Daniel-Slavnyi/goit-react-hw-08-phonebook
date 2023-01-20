import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const usersApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
