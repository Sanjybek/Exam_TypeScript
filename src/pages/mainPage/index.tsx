import MainContainer from '../../container/mainContainer';
import Authorization from '../authorization';

const MainPage = () => {
  const token = localStorage.getItem('token');
  return <>{!token ? <Authorization /> : <MainContainer />} </>;
};

export default MainPage;
