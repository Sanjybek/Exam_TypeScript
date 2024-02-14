import { ProductType } from '../../common/productTypes';

export type cardType = {
  product: ProductType;
  quantity: number;
};

type InitialState = {
  data: cardType[];
  isLoad: boolean;
  error: string;
};

export const initialState: InitialState = {
  data: [],
  isLoad: false,
  error: '',
};
