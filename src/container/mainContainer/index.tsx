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
        }
        filter.sort((a: TypArr, b: TypArr): number => {
            switch (sort) {
                case 'price' :
                    return +b.price - +a.price
                case 'idnone' :
                    return a.id - b.id
                case 'idnone2' :
                    return b.id - a.id
                default: 
                    return 0
            }
        })
        return filter
    }, [products, sort, product, ])

    const handleSort = (operator: string) => {
        setSort(operator)
    }

   
    const addToCart = (product: TypArr) => {
        const getLocalProduct: TypArr[]= JSON.parse(localStorage.getItem('bascket') ?? '[]')
            const object = {
                ...product,
                id: Math.random()
            }
            const arr = [...getLocalProduct, object]
            localStorage.setItem('bascket', JSON.stringify(arr))
      };
      
    return (
            <>
                {isLoad ?   <Spin  className={s.search} tip="Loading" size="large"></Spin> :
                 <Main
                        products={filter}
                        handleDelete={handleDelete}
                        edit={edit}
                        desc={desc}
                        addToCart={addToCart}
                        handleLogout={handleLogout}
                        setProduct={setProduct}
                        handleSort={handleSort}
                    />
                    } 
            </>
    );
};

export default MainContainer;






 // const addToCart = (id: number) => {
      
    //      const existingCartString = localStorage.getItem(JSON.parse('card')) || [];

    //     //  const existingCartString = localStorage.getItem('card');
    //     // const isProductInCart = existingCartString.find((product: TypArr) => product.id === id);

    //     if(existingCartString) {
    //         const productToAdd = products.find((product) => product.id === id);
    //         existingCartString.push(productToAdd);
    //         console.log('добавлено в корзину');

    //     }
        
    // }

// if (existingCartString !== null) {
        //     const existingCart = JSON.parse(existingCartString);
        //     const isProductInCart = existingCart.find((product: TypArr) => product.id === id);
        //     console.log(isProductInCart, 'mmmmmm');
            
        //     if (!isProductInCart) {
        //         const productToAdd = products.find((product) => product.id === id);
        //         existingCart.push(productToAdd);
        //         console.log('добавлено в корзину');
                
        //         localStorage.setItem('bascket', JSON.stringify(existingCart));
        //     } 
        //     else {
        //         alert('Товар уже в корзине');
        //     }
        // } else {
        //     alert('Корзина не найдена');
        // }

  // const existingCartString = localStorage.getItem('bascket');
        // if(existingCartString !== null) {
        //     const  existingCart = JSON.parse(existingCartString)
        //     const isProductInCart = existingCart.find((product: TypArr) => product.id === id);
        //     if (!isProductInCart) {
        //             const productToAdd = products.find((product) => product.id === id);
        //             existingCart.push(productToAdd);
        //             console.log('добавлено в корзину');
                
        //             localStorage.setItem('bascket', JSON.stringify(existingCart));
        //     }
        // }