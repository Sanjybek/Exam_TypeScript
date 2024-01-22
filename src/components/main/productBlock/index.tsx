import React, { useState } from 'react';
import { TypArr } from '../../../store/product/initialState';
import s from './style.module.scss'
import {DeleteOutlined } from '@ant-design/icons';
import { Skeleton , Space} from 'antd';


 type ProductsType = {
    
    products: TypArr[]
    handleDelete: (id: number ) => void
    desc: (id: number) => void
    edit: (id: number) => void

    addToCart: (id: number) => void

    showConfirmation: boolean
    confirmDelete: () => void
    cancelDelete: () => void
    
}

const ProductBlock: React.FC<ProductsType> = ({products,
    handleDelete,
    desc,
    edit,
    addToCart,
    showConfirmation,
    confirmDelete,
    cancelDelete

}) => {
  
    return (
        <section className={s.main}>
            <div className={s.container}>
                <ul   className={s.main__card}>
                    {(products).map((product: TypArr) => {
                        const { id, title, price, image } = product;
                            return (
                                <li className={s.home} key={id}>
                                    {!image ? <div className={s.home__picture} onClick={() => desc(id)}>PHOTO</div> : <img className={s.home__image} onClick={() => desc(id)} src={image}/>}
                                    <button type="button" className={s.home__delete} onClick={() => handleDelete(id)} > <DeleteOutlined /></button>
                                    {showConfirmation && (
                                        
                                        <div className={s.delete}>
                                            <div className={s.delete_wrapper}>
                                                <div className={s.delete_content}>
                                                    <p>Вы действительно хотите удалить этот продукт?</p>
                                                    
                                                    <br />
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
                                    <h1 className={s.home__title}>{title }</h1>
                                    <p className={s.home__price}> {price}</p>                                        
                                    <button type="button" onClick={() => edit(id)} className={s.home__btn_edit}>Редактировать</button>
                                    <button onClick={() => addToCart(id)} className={s.home__btn_bascet}> Добавить в корзину</button>
                                </li>  
                            );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default ProductBlock;