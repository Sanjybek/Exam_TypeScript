import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './login/slice';
import { productSlice } from './product/slice';
import { cardSlice } from './cardBascket/slice';
import { isGetProductSlice } from './get/slice';

export const store = configureStore({
  reducer: {
    loginReducer: loginSlice.reducer,
    productReducer: productSlice.reducer,
    cardReducer: cardSlice.reducer,
    isGetProductReducer: isGetProductSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
