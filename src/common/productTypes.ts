export const token = localStorage.getItem('token');
export type Product = {
  id?: number;
  title: string;
  description: string;
  price: string;
  image: string;
};
export type CartItem = {
  product: ProductType;
  quantity: number;
};
export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
};
