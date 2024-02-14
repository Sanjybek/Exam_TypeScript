import BascketContainer from '../../container/bascketContainer';
import Authorization from '../authorization';

const BascketPage = () => {
  const token = localStorage.getItem('token');
  return <>{!token ? <Authorization /> : <BascketContainer />} </>;
};

export default BascketPage;
