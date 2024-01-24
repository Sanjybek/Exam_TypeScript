import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './style.module.scss';

const SkeletonBlock = () => {
  const skeletonData = [
    { className: s.home__image },
    { className: s.home__delete },
    { className: s.home__title },
    { className: s.home__price },
    { className: s.home__btn_edit },
    { className: s.home__btn_bascet },
  ];

  const renderSkeletons = () => {
    return skeletonData.map((item, index) => (
      <Skeleton baseColor='#6DD5FA' key={index} {...item} />
    ));
  };

  const renderSkeletonBlocks = () => {
    const blocksCount = 18;

    return Array.from({ length: blocksCount }).map((_, index) => (
      <div key={index} className={s.home}>
        {renderSkeletons()}
      </div>
    ));
  };

  return <>{renderSkeletonBlocks()}</>;
};

export default SkeletonBlock;