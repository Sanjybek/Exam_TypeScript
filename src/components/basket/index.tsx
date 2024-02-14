import style from './style.module.scss';
import BasketItems from './items/item';
import { CartItem, ProductType } from '../../common/productTypes';

type BascketProps = {
  cart?: CartItem[];
  handleDeleteBasket: () => void;
  cartDelete: (id: number) => void;
  confirmDelete: (item: ProductType) => void;
};

const Bascket: React.FC<BascketProps> = ({ cart = [], handleDeleteBasket, confirmDelete }) => {
  if (!cart.length) {
    return <h1 className={style.basket__description}>Kорзине ничего нет</h1>;
  }
  return (
    <section className={style.basket}>
      <div className={style.container}>
        <div className={style.card}>
          <h1 className={style.card__title}>Корзина</h1>
          <div className={style.card__clear}>
            <button type="button" onClick={() => handleDeleteBasket()} className={style.card__button}>
              Очистить корзину
            </button>
          </div>
          <BasketItems cart={cart} confirmDelete={confirmDelete} />
        </div>
      </div>
    </section>
  );
};

export default Bascket;
