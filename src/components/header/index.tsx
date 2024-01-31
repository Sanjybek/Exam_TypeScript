import { NavLink, useParams } from 'react-router-dom';
import style from './styles.module.scss';
import { BASCKET_ROUTER, HOME_ROUTER, INFO_ROUTER, TEL_ROUTER } from '../../navigate/paths';
import { useAppDispatch, useAppSelector } from '../../hook';
import NavLinkItem from './navLinkItem';
import { login } from '../../store/login/slice';
const Header = () => {
  const dispatch = useAppDispatch();
  const { descId } = useParams();
  const token = useAppSelector((state) => state.loginReducer.token);
  const handleLogout = () => {
    dispatch(login());
  };

  return (
    <header className={style.headers}>
      <div className={style.container}>
        <div className={style.header}>
          <ul className={style.header_nav}>
            <NavLinkItem to={HOME_ROUTER} text="Главная" />
            <NavLinkItem to={INFO_ROUTER} text="О нас" />
            <NavLinkItem to={TEL_ROUTER} text="Контакты" />
            <NavLinkItem to={BASCKET_ROUTER} text="Корзина" />
          </ul>
          <div>
            {descId ? (
              <NavLink className={style.header__hover} to={HOME_ROUTER}>
                Вернуться
              </NavLink>
            ) : (
              <div>
                {token ? (
                  <NavLink to={'/login'} className={style.header_login} onClick={handleLogout}>
                    Выйти
                  </NavLink>
                ) : (
                  <NavLink to={'/login'} className={style.header_login}>
                    Войти
                  </NavLink>
                )}
              </div>
            )}
          </div>
        </div>
        <div className={style.burger}>
          <div className={style.logo}>
            <img
              className={style.header__logo}
              src="https://yt3.googleusercontent.com/7rR9lmy7LlKH--10O_sS8ITz6Fm84FrvMHY7GHS4dD8jZSM-3RE0LA9dTV5jRL7ukPWL5B2j=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className={style.block}>
            <input type="checkbox" id={style.burger__id} hidden />
            <label htmlFor={style.burger__id} className={style.burger__btn}></label>
            <ul className={style.burger__nav}>
              <NavLinkItem to={HOME_ROUTER} text="Главная" />
              <NavLinkItem to={INFO_ROUTER} text="О нас" />
              <NavLinkItem to={TEL_ROUTER} text="Контакты" />
              <NavLinkItem to={BASCKET_ROUTER} text="Корзина" />
              {descId ? (
                <NavLink className={style.header__hover} to={HOME_ROUTER}>
                  Вернуться
                </NavLink>
              ) : (
                <div>
                  {token ? (
                    <NavLink to={'/login'} className={style.header_login} onClick={handleLogout}>
                      Выйти
                    </NavLink>
                  ) : (
                    <div>
                      <NavLink className={style.header_login} to={'/login'}>
                        Войти
                      </NavLink>
                    </div>
                  )}
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
