import React from 'react';
import {Link, useParams} from "react-router-dom";
import s from './styles.module.scss'

const Header= () => {
    const {descId} = useParams()
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload()
    }
      

    return (
            <header className={s.headers}>
                <div className={s.container}>
                    <div className={s.header}>
                        <ul className={s.header_flex}>
                            <Link className={s.header__hover} to={'/'}>
                                Главная
                            </Link>
                            <Link className={s.header__hover} to={'/'}>
                                    О нас
                            </Link>
                            <Link className={s.header__hover} to={'/'}>
                                    Контакты
                            </Link> 
                            <Link className={s.header__hover} to={'/bascket'}>
                                    Корзина
                            </Link>  
                        </ul>
                        <ul>
                            {descId ? (
                                    <Link className={s.header__hover} to={'/'}>
                                        Вернуться
                                    </Link>
                                ) : (
                                    localStorage.getItem('token') ? (
                                        <button className={s.header_login} onClick={() => handleLogout()}>Выйти</button>
                                    ) : (
                                        <Link className={s.header_login} to={'/login'}>Войти</Link>
                                    )
                                )}
                        </ul>
                    </div>
                </div>
                
            </header>
    );
};

export default Header;