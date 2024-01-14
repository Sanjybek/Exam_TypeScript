import React from 'react';
import s from './style.module.scss'
import { BascketDataType } from '../../container/bascketContainer';

type BascketType = {
    deleteBascet: () => void
    cartDelete: (id:  number) => void
    data: BascketDataType[]
    
}


const Bascket: React.FC<BascketType> = ({deleteBascet,cartDelete, data }) => {
    return (
        <section className={s.bascket}>
        <div className={s.container}>
          <div className={s.bascetCard}>
            <h1 className={s.bascetCard__title}>Корзина</h1>
            <div className={s.btn__end}>
                <button onClick={() => deleteBascet()} className={s.btn}>Очистить корзину</button>
            </div>
            <ul className={s.card__ul}>
              {data.map((i) => {
                  const {title, price, image, id} = i
                  return (
                    <li className={s.card} key={id}> 
                      <img className={s.card__img} src={image}  alt="" />
                      <h1>{title}</h1>
                      <p>{price}</p>
                      <button className={s.btn} onClick={() => cartDelete(id)}>Удалить из корзины</button>
                    </li> 
                  )
              })
              }
            </ul>
          </div>
        </div>
      </section>
    );
};

export default Bascket;