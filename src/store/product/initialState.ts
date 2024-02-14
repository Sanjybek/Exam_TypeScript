import { Product } from '../../common/productTypes';

export type TypArr = {
  title: string;
  description: string;
  price: string;
  image: string;
  id: number;
};

type InitialState = {
  products: TypArr[];
  product: Product;
  isLoad: boolean;
  error: string;
};

export const initialState: InitialState = {
  products: [],
  product: {
    image: '',
    price: '',
    id: 0,
    title: '',
    description: '',
  },
  isLoad: false,
  error: '',
};
