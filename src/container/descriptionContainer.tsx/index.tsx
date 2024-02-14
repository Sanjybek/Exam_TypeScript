import React, { useEffect, useState } from 'react';
import Description from '../../components/description';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { descProduct } from '../../store/product/actions';
import { Spin } from 'antd';
import s from './style.module.scss';
const DescriptionContainer: React.FC = () => {
  const { descId } = useParams();
  const dispatch = useAppDispatch();

  const product = useAppSelector((state) => state.productReducer.product);
  const isLoad = useAppSelector((state) => state.productReducer.isLoad);
  useEffect(() => {
    if (descId) {
      dispatch(descProduct(descId));
    }
  }, [descId]);
  return <>{isLoad ? <Spin className={s.search} size="large"></Spin> : <Description product={product} />}</>;
};

export default DescriptionContainer;
