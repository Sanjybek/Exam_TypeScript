import { Link } from 'react-router-dom';
import { POST_ROUTER } from '../../../navigate/paths';
import style from './style.module.scss';
import { useAppDispatch } from '../../../hook';
import { setIsGetProduct } from '../../../store/get/slice';
const SaveBlock = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <section className={style.main}>
        <div className={style.container}>
          <ul className={style.action}>
            <Link className={style.action__save} to={POST_ROUTER} onClick={() => dispatch(setIsGetProduct(false))}>
              Создать товар
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SaveBlock;
