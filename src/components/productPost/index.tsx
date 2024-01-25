import s from './style.module.scss'
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
const ProduckPost: React.FC<postsProps> = ({onSubmit, values, handleAddPhotoClick, image, }) => {
    const {
        register,
        handleSubmit,
        formState :{errors},
    } = useForm<FormValues>({
        resolver: yupResolver(postSchema),
        values,
    })
    
    return (
        <section className={s.create}>
            <div className={s.container}>
                <form  className={s.create__form}  onSubmit={handleSubmit(onSubmit)} >
                    <div className={s.create__check}>
                        <div>
                            <Link to={HOME_ROUTER}  className={s.block__btn}>Отмена</Link>
                            <div onClick={() => handleAddPhotoClick()} className={s.block__photo}>
                                {image ? <img className={s.create__picture}  src={image}/> : <p className={s.text}>Добавить фотографию</p>}
                            </div>
                        </div>
                        <div  className={s.block__value}>
                            <input className={s.product__value}  placeholder='Введите название товара' {...register('title')}/>
                            <span className={s.post__error}>{errors?.title?.message}</span>
                            <input className={s.product__value} placeholder='Введите описание товара' {...register('description')}/>
                            <span className={s.post__error}>{errors?.description?.message}</span>
                            <input className={s.product__value } type="number"  placeholder='Введите цену товара' {...register('price')}/>
                            <span className={s.post__error}>{errors?.price?.message}</span>   
                            <div className={s.block__btn__end}>
                                <button  type='submit' className={s.block__btn}>Сохранить</button>
                            </div>
                        </div>   
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ProduckPost;