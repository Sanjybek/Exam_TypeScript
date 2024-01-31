import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Main, { ProductsType } from '../../components/main';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { DeleteProduct, getProduct } from '../../store/product/actions';
import { TypArr } from '../../store/product/initialState';
import s from './style.module.scss';

const MainContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoad, error, products } = useAppSelector((state) => state.productReducer);
  const [product, setProduct] = useState<string>('');
  const [sort, setSort] = useState<string>('');

  const edit = (productId: number) => {
    navigate(`/post/${productId}`);
  };
  const desc = (descId: number) => {
    navigate(`/description/${descId}`);
  };
  const filtered = useMemo(() => {
    let filter = [...products];
    if (product) {
      return products.filter((productElement) => productElement.title.toLowerCase().startsWith(product.toLowerCase()));
    }
    filter.sort((a: TypArr, b: TypArr): number => {
      switch (sort) {
        case 'price':
          return +a.price - +b.price;
        case 'price2':
          return +b.price - +a.price;
        case 'idnone':
          return a.id - b.id;
        case 'idnone2':
          return b.id - a.id;
        default:
          return 0;
      }
    });
    return filter;
  }, [products, sort, product]);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const handleSort = (operator: string) => {
    setSort(operator);
  };

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState<number>(0);
  const [deleteItemTitle, setDeleteItemTitle] = useState('');

  const handleDelete = (id: number, title: string) => {
    setDeleteItemId(id);
    setDeleteItemTitle(title);
    setShowConfirmation(true);
  };
  const confirmDelete = () => {
    setShowConfirmation(false);

    dispatch(DeleteProduct(deleteItemId))
      .then(() => dispatch(getProduct()))
      .catch(() => 'Произошла ошибка');
  };
  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  const [searchValue, setSearchValue] = useState('');

  const searchPruducts = () => {
    setProduct(searchValue);
  };

  const token = localStorage.getItem('token');
  return (
    <>
      <Main
        products={filtered}
        handleDelete={handleDelete}
        edit={edit}
        desc={desc}
        handleSort={handleSort}
        setSearchValue={setSearchValue}
        searchPruducts={searchPruducts}
        showConfirmation={showConfirmation}
        confirmDelete={confirmDelete}
        cancelDelete={cancelDelete}
        searchValue={searchValue}
        deleteItemTitle={deleteItemTitle}
      />
      <div className={s.search}>
        {!token ? <p>Aвторизовать</p> : !filtered.length && !isLoad && <p>Товар не найден</p>}
      </div>
    </>
  );
};

export default MainContainer;
