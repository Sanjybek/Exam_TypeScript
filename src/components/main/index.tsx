import React, { useState } from 'react';
import s from './style.module.scss'
import { TypArr } from '../../store/product/initialState';

import MainBlock from './mainBlock';
import ProductBlock from './productBlock';
import SaveBlock from './saveBlock';
import { useAppSelector } from '../../hook';
import { Spin } from 'antd';
import SkeletonBlock from './skeleton/skeleton';

export type ProductsType = {
    handleSort: (operator: string) => void
    setSearchValue: (title: string) => void
    searchPruducts: () => void
    products: TypArr[]
    handleDelete: (id: number) => void
    desc: (id: number) => void
    edit: (id: number) => void
    // addToCart: (product: TypArr) => void

    addToCart: (id: number) => void


    showConfirmation: boolean
    confirmDelete: () => void
    cancelDelete: () => void

}

const Main: React.FC<ProductsType> = ({
    products, 
    handleDelete, 
    desc, 
    edit, 
    addToCart,
    handleSort,
    setSearchValue  ,
    searchPruducts  ,
    showConfirmation,
    confirmDelete,
    cancelDelete,
    
}) => {
    const {isLoad, } = useAppSelector((state) => state.productReducer) 


    
    return (
        <>
                <MainBlock setSearchValue={setSearchValue} handleSort={handleSort} searchPruducts={searchPruducts} />
                
               <div className={s.container}>
                   <div className={s.main__card}>
                        {isLoad ? <SkeletonBlock/> : products.map(product => 
                            <ProductBlock 
                                product={product}
                                handleDelete={handleDelete}
                                desc={desc}
                                edit={edit}
                                addToCart={addToCart}
                                showConfirmation={ showConfirmation}
                                confirmDelete={confirmDelete}
                                cancelDelete={cancelDelete}
                            /> 
                        )} 
                    </div>
               </div>
                <SaveBlock/>
            </>
        
    );
};

export default Main;
