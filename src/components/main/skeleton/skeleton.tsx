import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import style from './style.module.scss';

const SkeletonBlock = () => {
  const skeletonData = [
    { className: style.home__image },
    { className: style.home__delete },
    { className: style.home__title },
    { className: style.home__price },
    { className: style.home__btn_edit },
    { className: style.home__btn_bascet },
  ];

  const renderSkeletons = () => {
    return skeletonData.map((item, index) => (
      <Skeleton
        baseColor=" 
        #2193b0"
        key={index}
        {...item}
      />
    ));
  };

  const renderSkeletonBlocks = () => {
    const blocksCount = 16;

    return Array.from({ length: blocksCount }).map((_, index) => (
      <div key={index} className={style.home}>
        {renderSkeletons()}
      </div>
    ));
  };

  return <>{renderSkeletonBlocks()}</>;
};

export default SkeletonBlock;
