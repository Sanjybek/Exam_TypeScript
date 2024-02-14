import Authorization from '../authorization';
import style from './style.module.scss';
const TelPage = () => {
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

export default TelPage;
