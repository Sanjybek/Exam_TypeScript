import s from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthScheme, RegisterScheme } from '../../utils/scheme';
import { AuthProps } from './types';
import { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hook';
import { someClearErrorAction } from '../../store/login/slice';
type FormValues = {
  username: string;
  password: string;
  confirmpassword: string;
};
type DataType = {
  placeholder: string;
  name: keyof FormValues;
  type: string;
};
const data: DataType[] = [
  { placeholder: 'username', name: 'username', type: 'text' },
  { placeholder: 'password', name: 'password', type: 'text' },
  { placeholder: 'password', name: 'confirmpassword', type: 'text' },
];
const Registration: React.FC<AuthProps> = ({ onSubmit, setIsRegister, error }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(RegisterScheme),
    reValidateMode: 'onSubmit',
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(someClearErrorAction());
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch, error]);
  const password = watch('password');
  const confirmPassword = watch('confirmpassword');

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  }, [password, confirmPassword]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.wrapper}>
      <h1>Регистрация</h1>
      {data.map(({ name, placeholder, type }): ReactElement => {
        return (
          <label key={name}>
            <input type={type} placeholder={placeholder} {...register(name)} />
            <span className={s.wrapper_error}>{errors?.[name]?.message}</span>
          </label>
        );
      })}
      <div className={s.wrapper_error}> {error}</div>
      <button>Зарегистрировать</button>
      <p>Есть аккаунт? Войдите</p>
      <button type="button" onClick={() => setIsRegister(false)}>
        Войти
      </button>
    </form>
  );
};

export default Registration;
