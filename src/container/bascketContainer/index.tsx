import { string } from 'yup';
import Bascket from '../../components/bascket';
import React, { useState } from 'react';
import { useAppSelector } from '../../hook';
import {Spin} from 'antd'
export type BascketDataType = {
    image: string
    price: string
    id: number
    title: string
    description: string
}
const BascketContainer = () => {
    
    const storedCartData = localStorage.getItem('cart');
    const initialCartData: BascketDataType[] = storedCartData ? JSON.parse(storedCartData) : [];
    const [data, setData] = useState(initialCartData);
    const isLoad = useAppSelector((state) => state.productReducer.isLoad)
    const cartDelete = (id: number) => {
        const deleteId = data.filter((card) => card.id !== id)
        localStorage.setItem('cart', JSON.stringify(deleteId))
        setData(deleteId)
    }
    const deleteBascet = () => {
        setData([])
    }
    return (
        <>
         {isLoad ? <Spin tip="Loading" size="large"></Spin>: <Bascket cartDelete={cartDelete} deleteBascet={deleteBascet} data={data} />}
        </>
    );
};

export default BascketContainer;