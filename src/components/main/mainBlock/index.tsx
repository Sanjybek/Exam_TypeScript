import React from 'react';
import s from './style.module.scss'
import {ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export type ProductsType = {
    handleSort: (operator: string) => void
    setSearchValue: (title: string) => void
    searchPruducts: () => void
}

const MainBlock: React.FC<ProductsType> = ({setSearchValue, handleSort, searchPruducts}) => {
    const sort__price = ({isSort__price}: any) => isSort__price ? s.active : ''
    return (
     <section className={s.main}>
          <div className={s.container}>
            <div className={s.login}>
                <div  className={s.main}>
                    <div className={s.main_search}>
                        <input  onChange={(text) => setSearchValue(text.target.value)} placeholder='Введите поисковик' className={s.main_inp}/>
                        <Button  onClick={() =>searchPruducts()}  className={s.main_btn}>Поиск</Button> 
                    </div>
                    <div className={s.sort}>
                        <h1 className={s.price__sort}>Сортировать по:</h1>
                        {/* DRY!!!! */}
                        <div className={s.sort__price}>Ценам 
                            <button className={s.antd__icon}>
                                <ArrowUpOutlined onClick={() => handleSort('price')} /> 
                                <ArrowDownOutlined onClick={() => handleSort('price2')}/>
                            </button>
                        </div>
                        <button className={s.sort__price}  onClick={() => handleSort('idnone')}>Сначала новые</button>
                        <button className={s.sort__price}  onClick={() => handleSort('idnone2')}>Сначала старые</button>
                        <button className={s.sort__price}  onClick={() => handleSort('filter')}>Без фильтров</button>
                    </div>
                </div>
            </div>
          </div>
     </section>

    );
};

export default MainBlock;