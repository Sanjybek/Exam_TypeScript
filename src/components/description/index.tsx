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
                <div  className={s.info} >
                    <ul className={s.ul}>  
                        <h1 className={s.info__title} >{product.title}</h1>
                        <li className={s.info__card} key={product.id}>
                            <div className={s.info__desc}> {!product.image ? <p></p> : <img className={s.info__image} src={product.image} alt="" />}Описание {product.description}</div>
                        </li>   
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default Description;