import ProduckPost from '../../components/productPost';
import React, { useEffect, useState } from 'react';
import { postsProdoct, putId } from '../../store/product/actions';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';

const PostContainer = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {productID} = useParams()
    const products = useAppSelector((state) => state.productReducer.products)
    
    const product = products.find((product) => `${product.id}` === productID)
    const initialValues = {
        price: '',
        description: '',
        title: '',
    }

    const [image, setImage] = useState<string>('')
    const [values, setValue] = useState(initialValues)
    useEffect(() => {
        if(productID && product) {
            setValue(product)
            setImage(product.image)
        } 
    }, [productID && product])
    
    type Data = {
        title: string
        description: string
        price: string
        image?: string
        id?: number
    }
    const onSubmit =  (data: Data) => {
        if(productID) {
            const obj = {
                ...data,
                image: image,
                id: productID,
            }
            dispatch(putId({navigate, ...obj})) 
        } else {
            const obj = {
                ...data,
                image: image,
            }
            dispatch(postsProdoct({navigate,...obj}))
        }
    }
    const handleAddPhotoClick = () => {
        const imgValue = prompt('Введите URL фотографии');
        if(imgValue) {
            setImage(imgValue)
        }
    };
    return (
        <ProduckPost onSubmit={onSubmit} image={image} values={values} handleAddPhotoClick={handleAddPhotoClick} />
    );
};

export default PostContainer;