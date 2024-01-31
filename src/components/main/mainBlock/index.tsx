import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
export type ProductsType = {
  handleSort: (operator: string) => void;
  setSearchValue: (title: string) => void;
  searchPruducts: () => void;
  searchValue: string;
};

const MainBlock: React.FC<ProductsType> = ({ setSearchValue, handleSort, searchPruducts, searchValue }) => {
  const [activeSort, setActiveSort] = useState<string | null>(null);

  const handleSortClick = (operator: string) => {
    setActiveSort(operator);
    handleSort(operator);
  };
  useEffect(() => {
    if (searchValue === '') {
      searchPruducts();
    }
  }, [searchValue]);
  return (
    <section className={style.main}>
      <div className={style.container}>
        <div className={style.login}>
          <div className={style.main}>
            <div className={style.main_search}>
              <div className={style.search}>
                <input
                  onChange={(text) => setSearchValue(text.target.value)}
                  placeholder="Введите поисковик"
                  className={style.main__search_value}
                  value={searchValue}
                />
                {!searchValue && (
                  <SearchOutlined
                    onClick={() => setSearchValue('')}
                    className={style.main__clear_icon}
                    htmlFor={style.id}
                  />
                )}
                {searchValue && <CloseOutlined onClick={() => setSearchValue('')} className={style.main__clear_icon} />}
              </div>
              <Button onClick={() => searchPruducts()} className={style.main__search_button}>
                Поиск
              </Button>
            </div>
            <div className={style.sort}>
              <h1 className={style.price__sort}>Сортировать по:</h1>
              <div className={style.sort__price}>
                Ценам
                <button className={style.antd__icon}>
                  <ArrowUpOutlined
                    onClick={() => handleSortClick('price')}
                    className={`${style.sort__price} ${activeSort === 'price' ? style.activeSort : ''}`}
                  />
                  <ArrowDownOutlined
                    onClick={() => handleSortClick('price2')}
                    className={`${style.sort__price} ${activeSort === 'price2' ? style.activeSort : ''}`}
                  />
                </button>
              </div>
              <button
                className={`${style.sort__price} ${activeSort === 'idnone' ? style.activeSort : ''}`}
                onClick={() => handleSortClick('idnone')}
              >
                Сначала новые
              </button>
              <button
                className={`${style.sort__price} ${activeSort === 'idnone2' ? style.activeSort : ''}`}
                onClick={() => handleSortClick('idnone2')}
              >
                Сначала старые
              </button>
              <button
                className={`${style.sort__price} ${activeSort === 'filter' ? style.activeSort : ''}`}
                onClick={() => handleSortClick('filter')}
              >
                Без фильтров
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBlock;
