import style from './style.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { postSchema } from '../../utils/scheme';
import { postsProps } from './types';
import { HOME_ROUTER } from '../../navigate/paths';
export type FormValues = {
  title: string;
  description: string;
  price: string;
  id?: number;
};
const ProduckPost: React.FC<postsProps> = ({ onSubmit, values, handleAddPhotoClick, image }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(postSchema),
    values,
  });
  return (
    <section className={style.create}>
      <div className={style.container}>
        <form className={style.create__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.create__check}>
            <div>
              <Link to={HOME_ROUTER} className={style.block__btn}>
                Отмена
              </Link>
              <div onClick={() => handleAddPhotoClick()} className={style.block__photo}>
                {image ? (
                  <img className={style.create__picture} src={image} />
                ) : (
                  <p className={style.text}>Добавить фотографию</p>
                )}
              </div>
            </div>
            <div className={style.block__value}>
              <input className={style.product__value} placeholder="Введите название товара" {...register('title')} />
              <span className={style.post__error}>{errors?.title?.message}</span>
              <input
                className={style.product__value}
                placeholder="Введите описание товара"
                {...register('description')}
              />
              <span className={style.post__error}>{errors?.description?.message}</span>
              <input
                className={style.product__value}
                type="number"
                placeholder="Введите цену товара"
                {...register('price')}
              />
              <span className={style.post__error}>{errors?.price?.message}</span>
              <div className={style.block__btn__end}>
                <button type="submit" className={style.block__btn}>
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
