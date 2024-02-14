import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { deleteAllBasket, deleteIdBasket, getBasketAction } from './actions';

export const cardSlice = createSlice({
  name: 'get-card',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBasketAction.fulfilled, (state, actions) => {
      state.data = actions.payload;
      state.isLoad = false;
    });
    builder.addCase(getBasketAction.rejected, (state, actions) => {
      state.error = actions.payload as string;
      state.isLoad = false;
    });
    builder.addCase(getBasketAction.pending, (state) => {
      state.isLoad = true;
    });
    builder.addCase(deleteIdBasket.fulfilled, (state, action) => {
      const deleteID = action.meta.arg;
      state.data = state.data.filter((product) => product.product.id !== deleteID);
      state.isLoad = false;
    });
    builder.addCase(deleteIdBasket.rejected, (state, actions) => {
      state.error = actions.payload as string;
      state.isLoad = false;
    });
    builder.addCase(deleteAllBasket.pending, (state) => {
      state.isLoad = true;
    });

    builder.addCase(deleteAllBasket.fulfilled, (state) => {
      state.isLoad = false;
      state.data = [];
    });
    builder.addCase(deleteAllBasket.rejected, (state) => {
      state.isLoad = false;
    });
  },
});
export const { clearCart } = cardSlice.actions;
