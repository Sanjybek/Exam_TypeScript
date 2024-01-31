import ProduckPost from '../../components/productPost';
import React, { useEffect, useState } from 'react';
import { descProduct, postsProdoct, putId } from '../../store/product/actions';
import { unstable_HistoryRouter, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { HOME_ROUTER } from '../../navigate/paths';
import { Spin } from 'antd';
import s from './style.module.scss';
const initialValues = {
  price: '',
  description: '',
  title: '',
};
const PostContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { productID } = useParams();
  const [image, setImage] = useState<string>('');
  const [values, setValue] = useState(initialValues);
  const productEdit = useAppSelector((state) => state.productReducer.product);
  const isLoad = useAppSelector((state) => state.productReducer.isLoad);
  useEffect(() => {
    if (productID) {
      dispatch(descProduct(productID));
    }
  }, [productID]);
  useEffect(() => {
    if (productID && productEdit) {
      setValue({ ...productEdit, price: `${+productEdit.price - 0}` });
      setImage(productEdit.image);
    }
  }, [productID && productEdit]);
  type Data = {
    title: string;
    description: string;
    price: string;
    image?: string;
    id?: number;
  };
  const onSubmit = (data: Data) => {
    if (productID) {
      const obj = {
        ...data,
        image,
        id: productID,
      };
      dispatch(putId({ navigate, ...obj }));
    } else {
      const obj = {
        ...data,
        image,
      };
      dispatch(postsProdoct({ navigate, ...obj }));
    }
  };
  const handleAddPhotoClick = () => {
    const imgValue = prompt('Введите URL фотографии');
    if (imgValue) {
      setImage(imgValue);
    }
  };
  return (
    <>
      {isLoad ? (
        <Spin className={s.search} size="large"></Spin>
      ) : (
        <ProduckPost onSubmit={onSubmit} image={image} values={values} handleAddPhotoClick={handleAddPhotoClick} />
      )}
    </>
  );
};

export default PostContainer;
