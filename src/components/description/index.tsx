import React from 'react';
import s from './style.module.scss'
type DescDataType = {
    product: {
        image: string
        price: string
        id?: number
        title: string
        description: string
    }
}

const Description: React.FC<DescDataType> = ({product}) => {
    return (
        <section>
            <div className={s.container} >
                <ul className={s.ul}>  
                    <h1 className={s.info__title} >{product.title}</h1>
                    <li className={s.info__card} key={product.id}>
                        <img className={s.info__picture} src={product.image} alt="" />
                        <p className={s.info__description}> 
                            <p> Описание </p>
                        {product.description}</p>
                    </li>   
                </ul>
            </div>
        </section>
    );
};
export default Description;