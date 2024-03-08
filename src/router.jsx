import { createBrowserRouter } from "react-router-dom";
import HomePage  from './pages/HomePage/HomePage';
import  SignInPage from './pages/SignInPage/SignInPage';
import UserPage from './pages/UserPage/UserPage';
import  ClubDetails  from './pages/ClubDetails/ClubDetails';
import  SearchPage  from './pages/SearchPage/SearchPage';
import SignUpPage from "./pages/SignUpPage/SignUpPage";

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
    path: '/register',
    element: <SignUpPage />,
  },
  {
    path: '/login',
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