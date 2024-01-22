import React from 'react';
import { Link } from 'react-router-dom';
import { POST_ROUTER } from '../../../navigate/paths';
import s from './style.module.scss'
const SaveBlock = () => {
    return (
        <>
            <section className={s.main}>
                <div  className={s.container}>
                    <ul className={s.action}>
                        <Link className={s.action__save} to={POST_ROUTER}>Создать товар</Link>
                    </ul>
                </div>
            </section>
            
        </>
    );
};

export default SaveBlock;