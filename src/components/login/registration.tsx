import s from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterScheme } from '../../utils/scheme';
import { AuthProps } from './types';

type FormValues = {
  username: string;
  password: string;
  confirmpassword: string;
};

const Registration: React.FC<AuthProps> = ({ onSubmit, setIsRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(RegisterScheme),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.wrapper}>
      <h1>Регистрация</h1>
      <label>
        <input placeholder="user name" {...register('username')} />
        <span className={s.wrapper_error}>{errors?.username?.message}</span>
      </label>
      <label>
        <input placeholder="password" {...register('password')} />
        <span className={s.wrapper_error}>{errors?.password?.message}</span>
      </label>
      <label>
        <input placeholder="confirm password" {...register('confirmpassword')} />
        <span className={s.wrapper_error}>{errors?.confirmpassword?.message}</span>
      </label>
      <button>Зарегистрировать</button>
      <p>Есть аккаунт? Войдите</p>
      <button type="button" onClick={() => setIsRegister(false)}>
        Войти
      </button>
    </form>
  );
};

export default Registration;
