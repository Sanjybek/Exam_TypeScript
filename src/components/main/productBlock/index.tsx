import React, { useEffect, useState } from 'react';
import s from './style.module.scss'
import {DeleteOutlined } from '@ant-design/icons';
// import Skeleton from 'react-loading-skeleton'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useAppDispatch, useAppSelector } from '../../../hook';
 type ProductsType = {
    product:  {
        title: string
        description: string
        price: string
        image: string 
        id: number
    }
    handleDelete: (id: number ) => void
    desc: (id: number) => void
    edit: (id: number) => void
    addToCart: (id: number) => void
    showConfirmation: boolean
    confirmDelete: () => void
    cancelDelete: () => void
}
const ProductBlock: React.FC<ProductsType> = ({
    product,
    handleDelete,
    desc,
    edit,
    addToCart,
    showConfirmation,
    confirmDelete,
    cancelDelete

}) => {
    return (
        <>
            <div className={s.home} key={product.id}>
                {product.image ? (
                    <img className={s.home__image} onClick={() => desc(product.id)} src={product.image} alt="Product Image"/>
                    ) : (
                    <div className={s.home__image} onClick={() => desc(product.id)}>
                        ...
                    </div> 
                )} 
                <button type="button" className={s.home__delete} onClick={() => handleDelete(product.id)} ><DeleteOutlined/></button>
                {showConfirmation && (
                    <div className={s.delete}>
                        <div className={s.delete_wrapper}>
                            <div className={s.delete_content}>
                                <p>Вы действительно хотите удалить этот продукт?</p>
                                <div className={s.delete_buttons}>
                                    <button className={s.confirm_button} onClick={confirmDelete }>
                                        да 
                                    </button>
                                    <button className={s.close_button} onClick={cancelDelete}>
                                        нет
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <h1 className={s.home__title}>{product.title}</h1>
                <p className={s.home__price}> {product.price}</p>                                        
                <button type="button" onClick={() => edit(product.id)} className={s.home__button_edit}>Редактировать</button>
                <button onClick={() => addToCart(product.id)} className={s.home__button_bascet}>Добавить в корзину</button>
            </div>

        </>   
    );
};

export default ProductBlock;

