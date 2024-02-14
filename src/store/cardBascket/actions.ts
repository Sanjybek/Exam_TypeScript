import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstans } from '../../api';
import { cardType } from './initialState';

type card = {};
export type get = {
  title: string;
  description: string;
  price: string;
  image: string;
  id: number;
  quantity: number;
};

export const basketAction = createAsyncThunk<undefined, card, { rejectValue: string }>(
  'add-card/bascetAction',
  async ({ ...data }, thunkAPI) => {
    try {
      await axiosInstans.post('/add-cart/', data);
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при загрузе товаров!');
    }
  },
);
export const getBasketAction = createAsyncThunk<cardType[], undefined, { rejectValue: string }>(
  'get-card/bascetAction',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstans.get('/get-cart/');
      return response.data.cart;
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при загрузе товаров!');
    }
  },
);

export const deleteAllBasket = createAsyncThunk<undefined, undefined, { rejectValue: string }>(
  'delete-all-card/bascetAction',
  async (_, thunkAPI) => {
    try {
      await axiosInstans.delete('remove-all/');
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при загрузе товаров!');
    }
  },
);

export const deleteIdBasket = createAsyncThunk<undefined, number, { rejectValue: string }>(
  'delete-card/bascetAction',
  async (product_id, thunkAPI) => {
    try {
      await axiosInstans.delete(`remove-from-cart/${product_id}`);
    } catch (e) {
      return thunkAPI.rejectWithValue('Произошла ошибка при загрузе товаров!');
    }
  },
);
