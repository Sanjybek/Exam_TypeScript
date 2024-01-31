import { Link } from 'react-router-dom';
import { POST_ROUTER } from '../../../navigate/paths';
import style from './style.module.scss';
const SaveBlock = () => {
  return (
    <>
      <section className={style.main}>
        <div className={style.container}>
          <ul className={style.action}>
            <Link className={style.action__save} to={POST_ROUTER}>
              Создать товар
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SaveBlock;
