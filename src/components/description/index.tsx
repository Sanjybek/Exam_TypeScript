import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss'
import { TypArr } from '../../store/product/initialState';

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
    console.log(product, 'mini');
    return (
        <section>
                <div className={s.container} >
                        <div  className={s.info} >
                            <ul className={s.ul}>  
                                <h1 className={s.info__title} >{product.title}</h1>
                                <li className={s.info__card} key={product.id}>
                                    <div className={s.info__div}>
                                        <img className={s.info__image} src={product.image} alt="" />
                                    </div>
                                    <div className={s.description}>
                                        <p className={s.info__desc}><span className={s.desc}>Описание</span> <br /> <br/>{product.description}</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                </div>
        </section>
    );
};

export default Description;