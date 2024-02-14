import style from './style.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldErrors, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { postSchema } from '../../utils/scheme';
import { postsProps } from './types';
import { HOME_ROUTER } from '../../navigate/paths';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setIsGetProduct } from '../../store/get/slice';
export type FormValues = {
  title: string;
  description: string;
  price: string;
  id?: number;
};
export const data: { placeholder: string; name: keyof FormValues; type: string }[] = [
  { placeholder: 'Введите название товара', name: 'title', type: 'text' },
  { placeholder: 'Введите описание товара', name: 'description', type: 'text' },
  { placeholder: 'Введите цену товара', name: 'price', type: 'number' },
];

const ProduckPost: React.FC<postsProps> = ({ onSubmit, values, handleAddPhotoClick, image }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(postSchema),
    values,
  });
  const { error, isLoad } = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^\d*\.?\d*$/.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^\d.]/g, '');
    }
  };

  return (
    <section className={style.section}>
      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.form__check}>
            <div>
              <Link to={HOME_ROUTER} className={style.form__button} onClick={() => dispatch(setIsGetProduct(false))}>
                Отмена
              </Link>
              <div onClick={() => handleAddPhotoClick()} className={style.form__photo}>
                {image ? (
                  <img className={style.form__picture} src={image} />
                ) : (
                  <p className={style.text}>Добавить фотографию</p>
                )}
              </div>
            </div>
            <div className={style.form__value}>
              {data.map(({ name, type, placeholder }) => (
                <div key={name} className={style.product}>
                  <input
                    className={style.product__value}
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                    onChange={name === 'price' ? handlePriceChange : undefined}
                  />
                  <span className={style.product__error}>
                    {errors?.[name as keyof FieldErrors<FormValues>]?.message}
                  </span>
                </div>
              ))}
              <div className={style.form__button__end}>
                <button type="submit" className={style.form__button} onClick={() => dispatch(setIsGetProduct(false))}>
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProduckPost;
