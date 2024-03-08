import { createBrowserRouter } from "react-router-dom";
import HomePage  from './pages/HomePage/HomePage';
import  LoginPage  from './pages/LogInPage/LoginPage';
import  SignInPage from './pages/SignInPage/SignInPage';
import UserPage from './pages/UserPage/UserPage';
import  ClubDetails  from './pages/ClubDetails/ClubDetails';
import  SearchPage  from './pages/SearchPage/SearchPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/clubes',
    element: <ClubDetails />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signIn',
    element: <SignInPage />,
  },
  {
    path: '/user/profile',
    element: <UserPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  }
]);