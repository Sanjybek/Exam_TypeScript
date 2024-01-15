import Bascket from '../../components/bascket';
import React, { useState } from 'react';
import { TypArr } from '../../store/product/initialState';
export type BascketDataType = {
    image: string
    price: string
    id: number
    title: string
    description: string
}
const BascketContainer = () => {
    
    const storedCartData = localStorage.getItem('bascket');
    const initialCartData: TypArr[] = storedCartData ? JSON.parse(storedCartData) : [];
    
    const [data, setData] = useState(initialCartData);
    
    const cartDelete = (id: number) => {
        const deleteId = data.filter((card) => card.id !== id)
        localStorage.setItem('bascket', JSON.stringify(deleteId))
        setData(deleteId)
    }
    const deleteBascet = () => {
        setData([])
    }
    return (
        <>
         <Bascket cartDelete={cartDelete} deleteBascet={deleteBascet} data={data} />
        </>
    );
};

export default BascketContainer;