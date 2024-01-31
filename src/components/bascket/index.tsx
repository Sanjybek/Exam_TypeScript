import style from './style.module.scss';

type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
};
type CartItem = {
  product: Product;
  quantity: number;
};
type BascketProps = {
  cart?: CartItem[];
  handleDeleteBascket: () => void;
  cartDelete: (id: number) => void;
  confirmDelete: (id: number, title: string) => void;
};
const Bascket: React.FC<BascketProps> = ({ cart = [], handleDeleteBascket, cartDelete, confirmDelete }) => {
  return (
    <section className={style.bascket}>
      <div className={style.container}>
        <div className={style.bascetCard}>
          <h1 className={style.bascetCard__title}>Корзина</h1>
          <div className={style.clear}>
            <button type="button" onClick={() => handleDeleteBascket()} className={style.clear__button}>
              Очистить корзину
            </button>
          </div>
          <ul className={style.card__block}>
            {cart.map((item) => {
              return (
                <li className={style.card} key={item.product.id}>
                  {!!item.product.image ? (
                    <img className={style.card__picture} src={item.product.image} />
                  ) : (
                    <div className={style.card__picture}>PHOTO</div>
                  )}
                  <h1 className={style.bascet__title}>{item.product.title}</h1>
                  <p>{item.product.price}</p>
                  <button
                    className={style.clear__button}
                    onClick={() => confirmDelete(item.product.id, item.product.title)}
                  >
                    Удалить из корзины
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Bascket;
