import Bascket from '../../components/bascket';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { deleteAllBascket, deleteIdBascket, getBascketAction } from '../../store/cardBascket/actions';
import SkeletonBlock from '../../components/main/skeleton/skeleton';
import { Spin } from 'antd';
import style from './style.module.scss';
const BascketContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBascketAction());
  }, []);
  const cart = useAppSelector((state) => state.cardReducer.data);
  const isLoad = useAppSelector((state) => state.cardReducer.isLoad);

  const handleDeleteBascket = () => {
    const isConfirmed = window.confirm(`Вы действительно хотите удалить все товары  из корзины?`);
    if (isConfirmed) {
      dispatch(deleteAllBascket())
        .then(() => dispatch(getBascketAction()))
        .catch(() => 'Произошла ошибка');
    }
  };
  const cartDelete = (id: number) => {
    dispatch(deleteIdBascket(id)).then(() => dispatch(getBascketAction()));
  };
  const confirmDelete = (id: number, title: string) => {
    const isConfirmed = window.confirm(`Вы уверены, что хотите удалить "${title}" из корзины?`);
    if (isConfirmed) {
      cartDelete(id);
    }
  };
  return (
    <>
      {isLoad ? (
        <Spin className={style.search}></Spin>
      ) : (
        <Bascket
          cart={cart}
          handleDeleteBascket={handleDeleteBascket}
          cartDelete={cartDelete}
          confirmDelete={confirmDelete}
        />
      )}
    </>
  );
};

export default BascketContainer;
