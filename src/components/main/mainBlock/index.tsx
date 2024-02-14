import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { UpCircleFilled, DownCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { TypArr } from '../../../store/product/initialState';

export type ProductsType = {
  handleSort: (operator: string) => void;
  setSearchValue: (title: string) => void;
  searchPruducts: () => void;
  searchValue: string;
  products: TypArr[];
};

const MainBlock: React.FC<ProductsType> = ({ setSearchValue, handleSort, searchPruducts, searchValue, products }) => {
  const [activeSort, setActiveSort] = useState<string>();

  const handleSortClick = (operator: string) => {
    setActiveSort(operator);
    handleSort(operator);
  };
  useEffect(() => {
    if (!searchValue.length) {
      searchPruducts();
    }
  }, [searchValue]);

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.main_search}>
            <div className={style.search}>
              <input
                onChange={(text) => setSearchValue(text.target.value)}
                placeholder="Введите поисковик"
                className={style.main__search_value}
                value={searchValue}
              />
              {!searchValue ? (
                <SearchOutlined onClick={() => setSearchValue('')} className={style.main__clear_icon} />
              ) : null}
              {searchValue && <CloseOutlined onClick={() => setSearchValue('')} className={style.main__clear_icon} />}
            </div>
            <Button onClick={() => searchPruducts()} className={style.main__search_button}>
              Поиск
            </Button>
          </div>
          <div className={style.sort}>
            <h1 className={style.price__sort}>Сортировать по:</h1>
            <div
              className={`${activeSort === 'price' || activeSort === 'price2' ? style.activeSort : style.sort__price}`}
              onClick={() => handleSortClick(activeSort === 'price2' ? 'price' : 'price2')}
            >
              Ценам
              <button>
                {activeSort === 'price2' ? (
                  <UpCircleFilled className={style.sort__price || style.activeSort} />
                ) : (
                  <DownCircleFilled />
                )}
              </button>
            </div>

            <button
              className={`${activeSort === 'idOld' ? style.activeSort : style.sort__price}`}
              onClick={() => handleSortClick('idOld')}
            >
              Сначала новые
            </button>
            <button
              className={`${activeSort === 'idNew' ? style.activeSort : style.sort__price}`}
              onClick={() => handleSortClick('idNew')}
            >
              Сначала старые
            </button>
            <button
              className={`${activeSort === 'filter' ? style.activeSort : style.sort__price}`}
              onClick={() => handleSortClick('filter')}
            >
              Без фильтров
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBlock;
