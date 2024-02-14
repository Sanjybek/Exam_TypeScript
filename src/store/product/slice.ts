import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { DeleteProduct, createProduct, descProduct, getProduct, editProduct } from './actions';
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, actions) => {
      state.products = actions.payload;
      state.isLoad = false;
    });
    builder.addCase(getProduct.rejected, (state, actions) => {
      state.error = actions.payload as string;
      state.isLoad = false;
      state.products = [];
    });

    builder.addCase(getProduct.pending, (state) => {
      state.isLoad = true;
    });

    builder.addCase(editProduct.fulfilled, (state, action) => {
      state.products = state.products.map((product) => (product.id === action.payload.id ? action.payload : product));
      state.isLoad = false;
    });
    builder.addCase(editProduct.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoad = false;
    });
    builder.addCase(editProduct.pending, (state, action) => {
      state.isLoad = true;
    });

    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.isLoad = false;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoad = false;
    });
    builder.addCase(createProduct.pending, (state) => {
      state.isLoad = true;
    });

    builder.addCase(DeleteProduct.fulfilled, (state, action) => {
      const deletedProductId = action.meta.arg;
      state.products = state.products.filter((product) => product.id !== deletedProductId);
      state.isLoad = false;
    });
    builder.addCase(DeleteProduct.rejected, (state, actions) => {
      state.error = actions.payload as string;
      state.isLoad = false;
    });
    builder.addCase(DeleteProduct.pending, (state) => {
      state.isLoad = true;
    });

    builder.addCase(descProduct.fulfilled, (state, actions) => {
      state.product = actions.payload;
      state.isLoad = false;
    });
    builder.addCase(descProduct.rejected, (state, actions) => {
      state.error = actions.payload as string;
      state.isLoad = false;
    });
    builder.addCase(descProduct.pending, (state) => {
      state.isLoad = true;
    });
  },
});
