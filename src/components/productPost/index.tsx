import s from './style.module.scss'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { postSchema } from '../../utils/scheme';
import { postsProps } from './types';
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
        <div className={s.block}>
            <form  className={s.block__form}  onSubmit={handleSubmit(onSubmit)} >
                <div className={s.block__check}>
                    <div className={s.block__flex}>
                        <Link to={'/'}  className={s.block__btn}>Отмена</Link>
                        <div onClick={() => handleAddPhotoClick()} className={s.block__photo}>
                            {image ? <img className={s.img}  src={image} alt="" /> : <p className={s.text}>Добавить фотографию</p>}
                        </div>
                    </div>
                    <div className={s.block__nnn}>
                        <div  className={s.block__inp}>
                            <input className={s.inp}  placeholder='Введите название товара' {...register('title')}/>
                            <span className={s.post__error}>{errors?.title?.message}</span>
                            <input className={s.inp} placeholder='Введите описание товара' {...register('description')}/>
                            <span className={s.post__error}>{errors?.description?.message}</span>
                            <input className={s.inp } type="number"  placeholder='Введите цену товара' {...register('price')}/>
                            <span className={s.post__error}>{errors?.price?.message}</span>
                            
                        </div>
                    </div>
                    <div className={s.save__btn}>
                        <button className={s.block__btn__end} type='submit'>Сохранить</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProduckPost;