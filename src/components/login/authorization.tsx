import style from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthProps } from './types';
import { AuthScheme } from '../../utils/scheme';

import { useAppDispatch, useAppSelector } from '../../hook';
import { useEffect } from 'react';
import { someClearErrorAction } from '../../store/login/slice';
type FormValues = {
  username: string;
  password: string;
};
export type DataType = {
  placeholder: string;
  name: keyof FormValues;
  type: string;
};
export const data: DataType[] = [
  { placeholder: 'username', name: 'username', type: 'text' },
  { placeholder: 'password', name: 'password', type: 'password' },
];
const Authorization: React.FC<AuthProps> = ({ onSubmit, setIsRegister }) => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.loginReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(AuthScheme),
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(someClearErrorAction());
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch, error]);
  return (
    <section className={style.authorization}>
      <div className={style.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={style.wrapper}>
          <h1>Войти</h1>
          {data.map(({ name, placeholder, type }) => {
            return (
              <label key={name}>
                <input type={type} placeholder={placeholder} {...register(name)} />
                <span className={style.wrapper_error}>{errors?.[name]?.message}</span>
              </label>
            );
          })}
          <div className={style.wrapper_error}>{error}</div>
          <button>Войти</button>
          <p>Нет аккаунта? Зарегистрируйтесь</p>
          <button type="button" onClick={() => setIsRegister(true)}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </section>
  );
};

export default Authorization;
