import { useState } from 'react';
import { Authorization, Registration } from '../../components/login';
// import { useDispatch, useSelector } from "react-redux"
import { loginAction, registerAction } from '../../store/login/actions';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { type } from 'os';
type Login = {
  password: string;
  username: string;
};
const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoad, error } = useAppSelector((state) => state.loginReducer);
  const [isRegister, setIsRegister] = useState(false);

  const onSubmit = (data: Login) => {
    if (isRegister) {
      dispatch(
        registerAction({
          navigate,
          username: data.username,
          password: data.password,
        }),
      );
    } else {
      dispatch(loginAction({ navigate, ...data }));
    }
  };
  return isRegister ? (
    <Registration onSubmit={onSubmit} setIsRegister={setIsRegister} isLoad={isLoad} error={error} />
  ) : (
    <Authorization onSubmit={onSubmit} setIsRegister={setIsRegister} isLoad={isLoad} error={error} />
  );
};

export default LoginPage;
