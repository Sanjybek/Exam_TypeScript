import React, { useEffect, useMemo, useState } from 'react';
import Main from '../../components/main';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { DeleteProduct, getProduct } from '../../store/product/actions';
import { TypArr } from '../../store/product/initialState';
import s from './style.module.scss';
import SaveBlock from '../../components/main/saveBlock';

const MainContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productReducer);
  const [product, setProduct] = useState<string>('');
  const [sort, setSort] = useState<string>('');
  const { isGetProduct } = useAppSelector((state) => state.isGetProductReducer);

  const edit = (productId: number) => {
    navigate(`/post/${productId}`);
  };
  const desc = (descId: number) => {
    navigate(`/description/${descId}`);
  };
  const filtered = useMemo(() => {
    let filter = [...products];

    filter.sort((a: TypArr, b: TypArr): number => {
      switch (sort) {
        case 'price':
          return +a.price - +b.price;
        case 'price2':
          return +b.price - +a.price;
        case 'idOld':
          return a.id - b.id;
        case 'idNew':
          return b.id - a.id;
        default:
          return 0;
      }
    });
    if (product) {
      return products.filter((productElement) => productElement.title.toLowerCase().startsWith(product.toLowerCase()));
    }
    return filter;
  }, [products, sort, product]);

  useEffect(() => {
    if (isGetProduct) {
      dispatch(getProduct());
    }
  }, [dispatch, isGetProduct]);

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
    dispatch(DeleteProduct(deleteItemId));
  };
  const cancelDelete = () => {
    setShowConfirmation(false);
  };
  const [searchValue, setSearchValue] = useState('');
  const searchPruducts = () => {
    setProduct(searchValue);
  };

  return (
    <>
      {products.length === 0 ? (
        <p className={s.search}>Добавьте товар, у вас сейчас нет товаров</p>
      ) : (
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
            filtered={filtered}
          />
          {!filtered.length && <p className={s.search}>Товар не найден</p>}
        </>
      )}
      <SaveBlock />
    </>
  );
};

export default MainContainer;
