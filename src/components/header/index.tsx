import { Link, NavLink, useParams} from "react-router-dom";
import s from './styles.module.scss'
import { BASCKET_ROUTER, HOME_ROUTER , INFO_ROUTER, LOGIN_ROUTER, TEL_ROUTER} from "../../navigate/paths";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getProduct } from "../../store/product/actions";
import { logout } from "../../store/login/slice";
import { Button, Flex } from 'antd';

const Header= () => {
    const {descId} = useParams()
    const dispatch = useAppDispatch();
    const token = useAppSelector((state) => state.loginReducer.token)
    console.log(token, 'ttttttttt');
    
    const handleLogout = () => {
        dispatch(logout());
        dispatch(getProduct());
    };

    const setActive = ({isActive}: any ) => isActive ? s.active : '';
    
    return (
            <header className={s.headers}>
                <div className={s.container}>
                    <div className={s.header}>
                        <ul className={s.header_nav}>
                            <NavLink className={setActive} to={HOME_ROUTER}>
                                Главная
                            </NavLink>
                            <NavLink className={setActive} to={INFO_ROUTER}>
                                    О нас
                            </NavLink>
                            <NavLink className={setActive} to={TEL_ROUTER}>
                                    Контакты
                            </NavLink> 
                            <NavLink className={setActive} to={BASCKET_ROUTER}>
                                    Корзина
                            </NavLink>  
                        </ul>
                        <div >
                            {descId ? (
                                    <NavLink className={s.header__hover} to={HOME_ROUTER}>
                                        Вернуться
                                    </NavLink>
                                ) : (
                                    <div>
                                        {token ?  <Button className={s.header_login} onClick={handleLogout}>Выйти</Button>: <div>
                                        <Link  to={'/login'}><Button     className={s.header_login} > Войти</Button></Link></div>}
                                    </div>
                            )}
                        </div>
                    </div>

                    <div className={s.burger}>
                        <div className={s.logo}>
                            <img className={s.header__logo} src="https://yt3.googleusercontent.com/7rR9lmy7LlKH--10O_sS8ITz6Fm84FrvMHY7GHS4dD8jZSM-3RE0LA9dTV5jRL7ukPWL5B2j=s900-c-k-c0x00ffffff-no-rj" alt="" />
                        </div>
                        <div className={s.block}>
                        <input type="checkbox" id={s.burger__id} hidden/>
                        <label htmlFor={s.burger__id} className={s.burger__btn} ></label>
                            <ul className={s.burger__nav}>
                                <NavLink className={setActive} to={HOME_ROUTER}>
                                    Главная
                                </NavLink>
                                <NavLink className={setActive} to={INFO_ROUTER}>
                                        О нас
                                </NavLink>
                                <NavLink className={setActive} to={TEL_ROUTER}>
                                        Контакты
                                </NavLink> 
                                <NavLink className={setActive} to={BASCKET_ROUTER}>
                                        Корзина
                                </NavLink>  
                                {descId ? (
                                    <NavLink className={s.header__hover} to={HOME_ROUTER}>
                                        Вернуться
                                    </NavLink>
                                ) : (
                                    <div>
                                        {token ?  <button className={s.header_login} onClick={handleLogout}>Выйти</button>: <div>
                                        <Link  className={s.header_login} to={'/login'}>Войти</Link></div>}
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


