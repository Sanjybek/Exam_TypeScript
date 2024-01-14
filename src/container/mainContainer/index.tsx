import React, { useEffect, useMemo, useState } from 'react';
import Main from '../../components/main';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { DeleteProduct, getProduct } from '../../store/product/actions';
import { TypArr } from '../../store/product/initialState';
import { Spin } from 'antd';
import s from './style.module.scss'
const MainContainer = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {isLoad, error, products} = useAppSelector((state) => state.productReducer) 
    useEffect(() => {
        dispatch(getProduct())
    }, [])
    const handleDelete = (id: number) => {
       dispatch(DeleteProduct(id))
        .then(() => dispatch(getProduct()))
    };
    const edit = (productId: number) => {
        navigate(`/post/${productId}`)
    }
    const desc = (descId: number) => {
        navigate(`/description/${descId}`)
    }

    type bascketType = {
        image: string
        price: string
        id: number | string
        title: string
        description: string
    }

    const addToCart = (productID: number) => {
        const existingCartString = localStorage.getItem('cart');
        if (existingCartString !== null) {
            const existingCart = JSON.parse(existingCartString);
    
            const isProductInCart = existingCart.find((i: bascketType) => i.id === productID);
            if (!isProductInCart) {
                const isCard = products.find((product) => product.id === productID);
                existingCart.push(isCard);
                localStorage.setItem('cart', JSON.stringify(existingCart));
            } else {
                alert('Товар уже в корзине');
            }
        } else {
            alert('Корзина не найдена');
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload()
    }
    const [product, setProduct] = useState<string>('')
    const [sort, setSort] = useState<string>('')
    

    

    const filter = useMemo(() => {
        let filter = [...products] 
        if (product) {
            return products.filter((productElement) => productElement.title.toLowerCase().startsWith(product.toLowerCase())
            );
            console.log(product);
        }
           
        filter.sort((a: TypArr, b: TypArr): number => {
            switch (sort) {
                case 'price' :
                    return +b.price - +a.price
                case 'idnone' :
                    return a.id - b.id
                case 'idnone2' :
                    return b.id - a.id
                case 'filter' :
                    return 0
                default: 
                    return 0
            }
        })
        return filter
    }, [products, sort, product, ])
    const filterProduct = (products: TypArr[]) => {
        
    };
    

    const handleSort = (operator: string) => {
        setSort(operator)
    }
    
    return (
            <>
                {isLoad ?   <Spin  className={s.search} tip="Loading" size="large"></Spin> :
                 <Main
                        filterProduct={filterProduct}
                        products={filter}
                        handleDelete={handleDelete}
                        edit={edit}
                        desc={desc}
                        addToCart={addToCart}
                        handleLogout={handleLogout}
                        setProduct={setProduct}
                        handleSort={handleSort}
                    />}
            </>
    );
};

export default MainContainer;