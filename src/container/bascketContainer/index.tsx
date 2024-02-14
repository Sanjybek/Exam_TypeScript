import Bascket from '../../components/basket';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { deleteAllBasket, deleteIdBasket, getBasketAction } from '../../store/cardBascket/actions';
import { Spin } from 'antd';
import style from './style.module.scss';
import { CartItem, ProductType } from '../../common/productTypes';
import { clearCart } from '../../store/cardBascket/slice';
const BascketContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBasketAction());
  }, []);
  const cart = useAppSelector((state) => state.cardReducer.data);
  const isLoad = useAppSelector((state) => state.cardReducer.isLoad);
  const [car, setCart] = useState<CartItem[]>([]);

  const handleDeleteBasket = () => {
    const isConfirmed = window.confirm(`Вы действительно хотите удалить все товары  из корзины?`);
    if (isConfirmed) {
      dispatch(deleteAllBasket())
        .then(() => {
          dispatch(clearCart());
        })
        .catch(() => 'Произошла ошибка');
    }
  };

  const cartDelete = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
    dispatch(deleteIdBasket(id)).catch(() => 'Произошла ошибка');
  };

  const confirmDelete = (item: ProductType) => {
    const isConfirmed = window.confirm(`Вы уверены, что хотите удалить "${item.title}" из корзины?`);
    if (isConfirmed) {
      cartDelete(item.id);
    }
  };
  return (
    <>
      {isLoad ? (
        <Spin className={style.search}></Spin>
      ) : (
        <Bascket
          cart={cart}
          handleDeleteBasket={handleDeleteBasket}
          cartDelete={cartDelete}
          confirmDelete={confirmDelete}
        />
      )}
    </>
  );
};

export default BascketContainer;
