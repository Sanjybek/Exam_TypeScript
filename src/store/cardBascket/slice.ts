import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getBascketAction } from './actions';

export const cardSlice = createSlice({
  name: 'get-card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBascketAction.fulfilled, (state, actions) => {
      state.data = actions.payload;
      state.isLoad = false;
    });
    builder.addCase(getBascketAction.rejected, (state, actions) => {
      state.error = actions.payload as string;
      state.isLoad = false;
    });
    builder.addCase(getBascketAction.pending, (state) => {
      state.isLoad = true;
    });
  },
});
