import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './login';
import Header from '../components/header';
import MainPage from './mainPage';
import PostContainer from '../container/postContainer';
import BascketPage from './bascketPage';
import DescriptionPage from './DescriptionPage';
import PostsPage from './postsPage/postsPage';
import InfoPage from './infoPage';
import TelPage from './TelPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <MainPage />
      </>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/bascket',
    element: (
      <>
        <Header />
        <BascketPage />
      </>
    ),
  },
  {
    path: '/description/:descId',
    element: (
      <>
        <Header />
        <DescriptionPage />
      </>
    ),
  },
  {
    path: '/post',
    element: <PostsPage />,
  },
  {
    path: '/post/:productID',
    element: <PostsPage />,
  },
  {
    path: '/info',
    element: (
      <>
        <Header />
        <InfoPage />
      </>
    ),
  },
  {
    path: '/tel',
    element: (
      <>
        <Header />
        <TelPage />
      </>
    ),
  },
]);
