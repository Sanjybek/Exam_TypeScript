import React from 'react';
import style from './style.module.scss';
import { Product } from '../../common/productTypes';
import { CheckTheImage } from '../basket/items/item';

type DescDataType = {
  product: Product;
};

const Description: React.FC<DescDataType> = ({ product }) => {
  return (
    <section>
      <div className={style.container}>
        <ul className={style.info}>
          <h1 className={style.info__title}>{product.title}</h1>
          <li className={style.info__card} key={product.id}>
            <CheckTheImage style={style.info__picture} url={product.image} />
            <div className={style.info__description}>
              <p className={style.info__description_text}> Описание </p>
              {product.description}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Description;
