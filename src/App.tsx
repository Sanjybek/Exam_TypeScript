import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MainPage from "./pages/mainPage";
// import Header from "./components/header";
// import LoginPage from './pages/login';
// import PostContainer from './container/postContainer';
// import BascketPage from './pages/bascketPage';
// import DescriptionPage from './pages/DescriptionPage';
// import DescriptionContainer from './container/descriptionContainer.tsx';
// import BascketContainer from './container/bascketContainer';
// import MainContainer from './container/mainContainer';

// export const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path="/" element={
//             <>
//               <Header/>
//               <MainContainer/>
//             </>
//           } />
//           <Route path="/login" element={
//             <>
//               <LoginPage/>
//             </>
//           } />
//           <Route path="/post" element={
//             <PostContainer/>
//           } />
//           <Route path="/post/:productID" element={
//             <PostContainer/>
//           } />

//           <Route path="/bascket" element={
//             <>
//               <Header/>
//               <BascketContainer/>
//             </>
//           } />
//           <Route path="/description/:descId" element={
//             <>
//               <Header/>
//               <DescriptionContainer/>
//             </>
//           } />
          
//       </Routes>
// 	</BrowserRouter>
//   );
// }

// export default App;
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routers";
function App() {
  return (
    <RouterProvider router={router}/>
  );
}
export default App;
