import { createSlice } from '@reduxjs/toolkit';

export const isGetProductSlice = createSlice({
  name: 'isGetProduct',
  initialState: { isGetProduct: true },
  reducers: {
    setIsGetProduct: (state, action) => {
      return {
        ...state,
        isGetProduct: action.payload,
      };
    },
  },
});
export const { setIsGetProduct } = isGetProductSlice.actions;
