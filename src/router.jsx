import Layout from ' ./pages/Layout/Layout';
import { createBrowserRouter } from "react-router-dom";
import ClubDetails from './pages/ClubDetails/ClubDetails';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import UserPage from './pages/UserPage/UserPage';

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
  },
  {
    path: '/layout',
    element: <Layout />,
  }
]);