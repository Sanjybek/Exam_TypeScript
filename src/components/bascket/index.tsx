import React from 'react';
import s from './style.module.scss'
import { BascketDataType } from '../../container/bascketContainer';
type BascketType = {
    deleteBascket: (data: BascketDataType[]) => void
    cartDelete: (id:  number) => void
    data: BascketDataType[]
}
const Bascket: React.FC<BascketType> = ({deleteBascket,cartDelete, data }) => {
    return (
      <section className={s.bascket}>
        <div className={s.container}>
          <div className={s.bascetCard}>
            <h1 className={s.bascetCard__title}>Корзина</h1>
            <div className={s.btn__end}>
                <button type='button' onClick={() => deleteBascket(data)} className={s.btn}>Очистить корзину</button>
            </div>
            <ul >
              {data.map(({title, price, image, id}) => {
                  return (
                    <li className={s.card} key={id}> 
                      {!image ? <div className={s.card__img}>PHOTO</div> : <img className={s.card__img} src={image}/> }
                      <h1 className={s.bascet__title}>{title}</h1>
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