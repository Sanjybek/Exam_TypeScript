import { NavLink, useParams } from 'react-router-dom';
import style from './styles.module.scss';
import { BASCKET_ROUTER, HOME_ROUTER, INFO_ROUTER, LOGIN_ROUTER, TEL_ROUTER } from '../../navigate/paths';
import { useAppDispatch } from '../../hook';
import NavLinkItem from './navLinkItem';
import { login } from '../../store/login/slice';
const Header = () => {
  const dispatch = useAppDispatch();
  const { descId } = useParams();
  const handleLogout = () => {
    dispatch(login());
  };
  const token = localStorage.getItem('token');
  const navigateLogin = () => {
    if (!token) {
      return (
        <NavLink to={LOGIN_ROUTER} className={style.header__login}>
          Войти
        </NavLink>
      );
    } else if (descId) {
      return (
        <NavLink className={style.header__hover} to={HOME_ROUTER}>
          Вернуться
        </NavLink>
      );
    } else if (token) {
      return (
        <NavLink to={LOGIN_ROUTER} className={style.header__login} onClick={handleLogout}>
          Выйти
        </NavLink>
      );
    }
  };

  return (
    <header className={style.headers}>
      <div className={style.container}>
        <div className={style.header}>
          <ul className={style.header__nav}>
            <NavLinkItem to={HOME_ROUTER} text="Главная" />
            <NavLinkItem to={INFO_ROUTER} text="О нас" />
            <NavLinkItem to={TEL_ROUTER} text="Контакты" />
            <NavLinkItem to={BASCKET_ROUTER} text="Корзина" />
          </ul>
          <div>{navigateLogin()}</div>
        </div>
        <div className={style.burger__block}>
          <div className={style.burger__logo}>
            <img
              className={style.header__logo}
              src="https://yt3.googleusercontent.com/7rR9lmy7LlKH--10O_sS8ITz6Fm84FrvMHY7GHS4dD8jZSM-3RE0LA9dTV5jRL7ukPWL5B2j=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className={style.burger}>
            <input type="checkbox" id={style.burger__id} hidden />
            <label htmlFor={style.burger__id} className={style.burger__btn}></label>
            <ul className={style.burger__nav}>
              <NavLinkItem to={HOME_ROUTER} text="Главная" />
              <NavLinkItem to={INFO_ROUTER} text="О нас" />
              <NavLinkItem to={TEL_ROUTER} text="Контакты" />
              <NavLinkItem to={BASCKET_ROUTER} text="Корзина" />
              <div>{navigateLogin()}</div>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
