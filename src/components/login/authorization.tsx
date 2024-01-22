import s from './styles.module.scss'
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup'
import { AuthScheme } from '../../utils/scheme';
import { AuthProps } from './types';

type FormValues = {
    username: string
    password: string
  }
const Authorization: React.FC<AuthProps> = ({onSubmit, setIsRegister}) => {
    const {
        register,
        handleSubmit,
        formState :{errors},
    } = useForm<FormValues>({
        resolver: yupResolver(AuthScheme)
    })
    return (
        <section className={s.authorization}>
            <div className={s.container}>
                <form onSubmit={handleSubmit(onSubmit)}  className={s.wrapper}>
                    <h1>Войти</h1>
                    {/* DRY */}
                    <label>
                        <input type="text" placeholder='username' {...register('username')}/>
                        <span className={s.wrapper_error}>{errors?.username?.message}</span>

                    </label>
                    {/* DRY */}
                    <label>
                        <input type="password"  placeholder='password' {...register('password')}/>
                        <span className={s.wrapper_error}>{errors?.password?.message}</span>
                    </label>
                    <button>Войти</button>
                    <p>Нет аккаунта? Зарегистрируйтесь</p>
                    <button type='button' onClick={() => setIsRegister(true)}>Зарегистрироваться</button>
                </form>
            </div>
        </section>
    );
};

export default Authorization;