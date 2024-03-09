import { createBrowserRouter } from "react-router-dom";
import ClubDetails from './pages/ClubDetails/ClubDetails';
import HomePage from './pages/HomePage/HomePage';
import Layout from './pages/Layout/Layout';
import SearchPage from './pages/SearchPage/SearchPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import UserPage from './pages/UserPage/UserPage';
import { LOGIN_URL } from "./constants/urls";
import { HOME_URL } from "./constants/urls";
import { CLUB_URL } from "./constants/urls";
import { REGISTER_URL } from "./constants/urls";
import { USER_URL } from "./constants/urls";
import { SEARCH_URL} from "./constants/urls";


export const router = createBrowserRouter([
  {
    path: HOME_URL,
    element: <HomePage />,
  },
  {
    path: CLUB_URL,
    element: <ClubDetails />,
  },
  {
    path: REGISTER_URL,
    element: <SignUpPage />,
  },
  {
    path: LOGIN_URL,
    element: <SignInPage />,
  },
  {
    path: USER_URL,
    element: <UserPage />,
  },
  {
    path: SEARCH_URL,
    element: <SearchPage />,
  },
  {
    path: '/layout',
    element: <Layout />,
  }
]);