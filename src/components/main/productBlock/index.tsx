import style from './style.module.scss';
import { DeleteOutlined } from '@ant-design/icons';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAppDispatch } from '../../../hook';
import { basketAction } from '../../../store/cardBascket/actions';
import { ProductType } from '../../../common/productTypes';
import { CheckTheImage } from '../../basket/items/item';
import { setIsGetProduct } from '../../../store/get/slice';

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
    dispatch(basketAction({ product: product.id, quantity: 0 }));
  };

  return (
    <>
      <div className={style.home}>
        <div
          onClick={() => {
            desc(product.id);
            dispatch(setIsGetProduct(false));
          }}
          className={style.ppp}
        >
          <CheckTheImage style={style.home__image} url={product.image} />
        </div>
        <button type="button" className={style.home__delete} onClick={() => handleDelete(product.id, product.title)}>
          <DeleteOutlined />
        </button>
        {showConfirmation && (
          <div className={style.delete}>
            <div className={style.delete_wrapper}>
              <div className={style.delete_content}>
                <p>{`Вы действительно хотите  удалить этот товар`}</p>
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
        <p className={style.home__price}> {+product.price - 0}$</p>
        <button
          type="button"
          onClick={() => {
            edit(product.id);
            dispatch(setIsGetProduct(false));
          }}
          className={style.home__button_edit}
        >
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
