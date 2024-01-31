import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstans } from '../../api';
import { HOME_ROUTER } from '../../navigate/paths';

type post = {
  navigate?: (path: string) => void;
  title: string;
  description: string;
  price: string;
  image: string;
};
type posts = post & {
  id: number;
};
type postsNav = post & {
  navigate: (path: string) => void;
};
type putId = post & {
  navigate: (path: string) => void;
  id: string;
};

export const postsProdoct = createAsyncThunk<undefined, postsNav, { rejectValue: string }>(
  'product/postsProdoct',
  async ({ navigate, ...data }, thunkAPI) => {
    try {
      await axiosInstans.post('product/', data);
      navigate(HOME_ROUTER);
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при создании товара!');
    }
  },
);
export const getProduct = createAsyncThunk<posts[], undefined, { rejectValue: string }>(
  'product/getProduct',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstans.get('product/');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при загрузе товаров!');
    }
  },
);
export const DeleteProduct = createAsyncThunk<undefined, number, { rejectValue: string }>(
  'product/DeleteProduct',
  async (id, thunkAPI) => {
    try {
      await axiosInstans.delete(`product/${id}`);
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при удалении товара!');
    }
  },
);
export const putId = createAsyncThunk<undefined, putId, { rejectValue: string }>(
  'product/putId',
  async ({ navigate, ...data }, thunkAPI) => {
    try {
      await axiosInstans.put(`product/${data.id}/`, data);
      navigate(HOME_ROUTER);
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при редактировнии!');
    }
  },
);

export const descProduct = createAsyncThunk<post, string, { rejectValue: string }>(
  'product/descProduct',
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstans.get(`product/${id}/`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при загрузе товаров!');
    }
  },
);
