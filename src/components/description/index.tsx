import React from 'react';
import style from './style.module.scss';
type DescDataType = {
  product: {
    image: string;
    price: string;
    id?: number;
    title: string;
    description: string;
  };
};

const Description: React.FC<DescDataType> = ({ product }) => {
  return (
    <section>
      <div className={style.container}>
        <ul className={style.ul}>
          <h1 className={style.info__title}>{product.title}</h1>
          <li className={style.info__card} key={product.id}>
            <img className={style.info__picture} src={product.image} />
            <div className={style.info__description}>
              <p className={style.description}> Описание </p>
              {product.description}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Description;
