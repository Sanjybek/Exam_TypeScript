import ProduckPost from '../../components/productPost';
import { useEffect, useState } from 'react';
import { descProduct, getProduct, createProduct, editProduct } from '../../store/product/actions';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { Spin } from 'antd';
import s from './style.module.scss';
import { setIsGetProduct } from '../../store/get/slice';
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
  const { isGetProduct } = useAppSelector((state) => state.isGetProductReducer);
  console.log(isGetProduct);
  useEffect(() => {
    if (productID) {
      dispatch(descProduct(productID));
    }
    if (isGetProduct) {
      dispatch(getProduct());
      dispatch(setIsGetProduct(false));
    }
  }, [dispatch, productID, isGetProduct]);
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
      dispatch(editProduct({ navigate, ...obj }));
    } else {
      const obj = {
        ...data,
        image,
      };
      dispatch(createProduct({ navigate, ...obj }));
    }
  };

  const handleAddPhotoClick = () => {
    const imgValue = prompt('Введите URL фотографии');
    if (imgValue) {
      const imgRegex = /\.(jpeg|jpg|gif|png)$/;
      if (imgRegex.test(imgValue)) {
        setImage(imgValue);
      } else {
        alert('Вы ввели некорректный URL фотографии');
      }
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
