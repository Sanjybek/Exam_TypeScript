import React from 'react';
import style from './style.module.scss';
import Authorization from '../authorization';
const InfoPage = () => {
  // return (
  // <div className={style.block}>
  //   <div className={style.logo}></div>
  // </div>
  // );
  const token = localStorage.getItem('token');
  return (
    <>
      {!token ? (
        <Authorization />
      ) : (
        <div className={style.block}>
          <div className={style.logo}></div>
        </div>
      )}
    </>
  );
};

export default InfoPage;
