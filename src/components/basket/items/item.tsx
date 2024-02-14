import { CartItem } from '../../../common/productTypes';
import style from '../style.module.scss';
type BascketProps = {
  cart: CartItem[];
  confirmDelete: Function;
};
type CheckTheImageProps = {
  url: string | undefined;
  style: string;
};

export const CheckTheImage: React.FC<CheckTheImageProps> = ({ url, style }) => {
  return <>{!!url ? <img className={style} src={url} /> : <div className={style}>...</div>}</>;
};

const BascketItems: React.FC<BascketProps> = ({ cart = [], confirmDelete }) => {
  return (
    <ul className={style.card__block}>
      {cart.map((item) => {
        return (
          <li className={style.card__element} key={item.product.id}>
            <CheckTheImage url={item.product.image} style={style.card__picture} />
            <h1 className={style.card__title_elem}>{item.product.title}</h1>
            <p className={style.card__price}>{+item.product.price}$</p>
            <button className={style.card__button} onClick={() => confirmDelete(item.product)}>
              Удалить из корзины
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default BascketItems;
