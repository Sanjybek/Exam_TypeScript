export type cardType = {
  product: {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
  };
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
