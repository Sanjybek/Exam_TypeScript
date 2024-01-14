import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/mainPage";
import Header from "./components/header";
import LoginPage from './pages/login';
import PostContainer from './container/postContainer';
import BascketPage from './pages/bascketPage';
import DescriptionPage from './pages/DescriptionPage';
// import UpdatedPostContainer from './container/postContainer';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={
            <>
              <Header/>
              <MainPage/>
            </>
          } />
          <Route path="/login" element={
            <>
              <LoginPage/>
            </>
          } />
          <Route path="/post" element={
            <PostContainer/>
          } />
          <Route path="/post/:productID" element={
            <PostContainer/>
          } />

          <Route path="/bascket" element={
            <>
              <Header/>
              <BascketPage/>
            </>
          } />
          <Route path="/description/:descId" element={
            <>
              <Header/>
              <DescriptionPage/>
            </>
          } />
          
      </Routes>
	</BrowserRouter>
  );
}

export default App;
