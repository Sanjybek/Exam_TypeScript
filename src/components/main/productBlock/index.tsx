import style from './style.module.scss';
import { DeleteOutlined } from '@ant-design/icons';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { bascetAction } from '../../../store/cardBascket/actions';
type ProductType = {
  title: string;
  description: string;
  price: string;
  image: string;
  id: number;
};

type ProductsType = {
  product: ProductType;
  handleDelete: (id: number, title: string) => void;
  desc: (id: number) => void;
  edit: (id: number) => void;
  showConfirmation: boolean;
  confirmDelete: () => void;
  cancelDelete: () => void;
  deleteItemTitle: string;
};
const ProductBlock: React.FC<ProductsType> = ({
  product,
  handleDelete,
  desc,
  edit,
  showConfirmation,
  confirmDelete,
  cancelDelete,
  deleteItemTitle,
}) => {
  const dispatch = useAppDispatch();
  const addToCart = (product: ProductType) => {
    dispatch(bascetAction({ product: product.id, quantity: 0 }));
    alert('Добавлено в корзину');
  };

  return (
    <>
      <div className={style.home} key={product.id}>
        {product.image ? (
          <img className={style.home__image} onClick={() => desc(product.id)} src={product.image} />
        ) : (
          <div className={style.home__image} onClick={() => desc(product.id)}>
            ...
          </div>
        )}
        <button type="button" className={style.home__delete} onClick={() => handleDelete(product.id, product.title)}>
          <DeleteOutlined />
        </button>
        {showConfirmation && (
          <div className={style.delete}>
            <div className={style.delete_wrapper}>
              <div className={style.delete_content}>
                <p>{`Вы действительно хотите  удалить этот товар `}</p>
                <p>{deleteItemTitle}</p>
                <div className={style.delete_buttons}>
                  <button className={style.confirm_button} onClick={confirmDelete}>
                    да
                  </button>
                  <button className={style.close_button} onClick={cancelDelete}>
                    нет
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <h1 className={style.home__title}>{product.title}</h1>
        <p className={style.home__price}> {+product.price - 0}</p>
        <button type="button" onClick={() => edit(product.id)} className={style.home__button_edit}>
          Редактировать
        </button>
        <button onClick={() => addToCart(product)} className={style.home__button_bascet}>
          Добавить в корзину
        </button>
      </div>
    </>
  );
};

export default ProductBlock;
