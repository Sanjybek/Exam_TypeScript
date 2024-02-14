import { createSlice } from '@reduxjs/toolkit';
import { registerAction, loginAction } from './actions';
import { token } from '../../common/productTypes';
type initType = {
  error: string;
  isLoad: boolean;
  token: string | null | undefined;
};
const initialState: initType = { error: '', isLoad: false, token: '' || token };

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state) {
      localStorage.removeItem('token');
      state.token = '';
    },
    someClearErrorAction(state) {
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.isLoad = false;
      state.token = action.payload;
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      state.isLoad = false;
      state.error = action.payload as string;
    });
    builder.addCase(registerAction.pending, (state) => {
      state.isLoad = true;
    });

    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.isLoad = false;
      state.token = action.payload;
      state.error = '';
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.isLoad = false;
      state.error = action.payload as string;
    });
    builder.addCase(loginAction.pending, (state) => {
      state.isLoad = true;
    });
  },
});
export const { login } = loginSlice.actions;
export const { someClearErrorAction } = loginSlice.actions;
