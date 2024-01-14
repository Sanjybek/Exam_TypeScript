import { number } from "yup"

export type TypArr = {
    title: string
    description: string
    price: string
    image: string 
    id: number
}


type InitialState = {
    products: TypArr[];
    product: {
        image: string;
        price: string;
        id?: number;
        title: string;
        description: string;
    };
    isLoad: boolean;
    error: string;
}

export const initialState: InitialState =   {
    products: [],
    product: {
        image: '',
        price: '',
        id: 0,
        title: '',
        description: '',
    }, 
    isLoad: false,
    error: ''
}
