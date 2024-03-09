import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes,Route, createBrowserRouter } from "react-router-dom";
import ClubDetails from './pages/ClubDetails/ClubDetails';
import HomePage from './pages/HomePage/HomePage';
import Layout from './pages/Layout/Layout';
import SearchPage from './pages/SearchPage/SearchPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import UserPage from './pages/UserPage/UserPage';
import { LOGIN_URL , HOME_URL, CLUB_URL, REGISTER_URL, USER_URL,SEARCH_URL} from "./constants/urls";
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
<Routes>
  <Route element={<Layout />}>

  <Route path= {HOME_URL} element = {<HomePage/>} />
  <Route path= {LOGIN_URL} element = {<SignInPage/>} />
  <Route path= {REGISTER_URL} element = {<SignUpPage/>} />
  <Route path= {USER_URL} element = {
  <PrivateRoute>
    <UserPage/>
    </PrivateRoute>}
     />
  <Route path= {SEARCH_URL} element = {<SearchPage/>} />
  <Route path= {CLUB_URL} element = {<ClubDetails/>} />
  </Route>
</Routes>
</BrowserRouter>
  </React.StrictMode>,
)
