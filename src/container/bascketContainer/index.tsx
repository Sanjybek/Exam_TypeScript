import Bascket from '../../components/bascket';
import React, { useEffect, useState } from 'react';
import { TypArr } from '../../store/product/initialState';
export type BascketDataType = {
    image: string
    price: string
    id: number
    title: string
    description: string
}

const BascketContainer = () => {
    
    const storedCartData = localStorage.getItem('card'); // Используйте 'card' вместо 'cart' для согласованности
    const initialCartData: BascketDataType[] = storedCartData ? JSON.parse(storedCartData) : [];
    const [data, setData] = useState(initialCartData);

    const cartDelete = (id: number) => {
        const deleteId = data.filter((card) => card.id !== id);
        localStorage.setItem('card', JSON.stringify(deleteId));
        setData(deleteId);
    }

    const deleteBascket = () => {
        const newCartData: any = [];
        setData(newCartData);
        localStorage.setItem('card', JSON.stringify(newCartData));
    }
    return (
        <Bascket cartDelete={cartDelete} deleteBascket={deleteBascket} data={data} />
    );
};

export default BascketContainer;