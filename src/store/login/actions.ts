import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstans } from '../../api';
import { HOME_ROUTER } from '../../navigate/paths';
type Login = {
  navigate: (path: string) => void;
  username: string;
  password: string;
};
export const registerAction = createAsyncThunk<undefined, Login, { rejectValue: string }>(
  'login/registerAction',
  async ({ navigate, ...data }, thunkAPI) => {
    try {
      const response = await axiosInstans.post('register/', data);
      navigate(HOME_ROUTER);
      localStorage.setItem('token', response.data.token);
      return response.data.token;
    } catch {
      return thunkAPI.rejectWithValue('Пользователь с таким именем уже существует.');
    }
  },
);

export const loginAction = createAsyncThunk<undefined, Login, { rejectValue: string }>(
  'login/loginAction',
  async ({ navigate, ...data }, thunkAPI) => {
    try {
      const response = await axiosInstans.post('login/', data);
      navigate(HOME_ROUTER);
      localStorage.setItem('token', response.data.token);
      return response.data.token;
    } catch (e) {
      return thunkAPI.rejectWithValue('Неправильное имя пользователя или пароль');
    }
  },
);
