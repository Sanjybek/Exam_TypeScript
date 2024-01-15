import React, { useState } from 'react';
import s from './style.module.scss'
import { Link } from 'react-router-dom';
import { TypArr } from '../../store/product/initialState';
import {DeleteOutlined } from '@ant-design/icons';
type ProductsType = {
    products: TypArr[]
    handleDelete: (id: number) => void
    desc: (id: number) => void
    edit: (id: number) => void
    handleLogout: () => void
    addToCart: (product: TypArr) => void
    setProduct: (title: string) => void
    handleSort: (operator: string) => void
}
const Main: React.FC<ProductsType> = ({
    products, 
    handleDelete, 
    desc, 
    edit, 
    addToCart,
    setProduct,
    handleSort,
}) => {
    const [searchValue, setSearchValue] = useState('')
    const searchPruducts = () => {
        setProduct(searchValue)
    }
    return (
        <main className={s.main}>
                <div className={s.container}>
                    <div className={s.login}>
                        <div  className={s.main}>
                            <div className={s.main_search}>
                                <input  onChange={(e) => setSearchValue(e.target.value)} placeholder='Введите поисковик' className={s.main_inp}/>
                                <button type='button' onClick={() =>searchPruducts()}  className={s.main_btn}>Поиск</button> 
                            </div>
                            <div className={s.sort}>
                                <h1>Сортировать по:</h1>
                                <button className={s.sort__hover} onClick={() => handleSort('price')}>Ценам</button>
                                <button className={s.sort__hover}  onClick={() => handleSort('idnone')}>Сначала новые</button>
                                <button className={s.sort__hover}  onClick={() => handleSort('idnone2')}>Сначала старые</button>
                                <button className={s.sort__hover}  onClick={() => handleSort('filter')}>Без фильтров</button>
                            </div>
                        </div>
                    </div>
                    <ul   className={s.main__card}>
                        {(products).map((product: TypArr) => {
                            const { id, title, description, price, image } = product;
                                return (
                                    <li className={s.home} key={id}>
                                        {!image ? <div>'PHOTO'</div> : <img className={s.home__image} onClick={() => desc(id)} src={image}/>}
                                        <button type="button" className={s.home__delete} onClick={() => handleDelete(id)}> <DeleteOutlined /></button>
                                        <h1 className={s.home__title}>{title}</h1>
                                        <p className={s.home__price}> {price}</p>
                                        <button type="button" onClick={() => edit(id)} className={s.home__btn_edit}>Редактировать</button>
                                        <button onClick={() => addToCart(product)} className={s.home__btn_bascet}> Добавить в корзину</button>
                                    </li>
                                );
                        })}
                    </ul>
                    <ul className={s.action}>
                        <Link className={s.action__save} to={'/post'}>Создать товар</Link>
                    </ul>
                </div>
            </main>
    );
};

export default Main;
