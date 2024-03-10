import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import ClubDetails from "./pages/ClubDetails/ClubDetails";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import UserPage from "./pages/UserPage/UserPage";
import {
  LOGIN_URL,
  HOME_URL,
  CLUB_URL,
  REGISTER_URL,
  USER_URL,
  SEARCH_URL,
} from "./constants/urls";

export const router = createBrowserRouter(
  <BrowserRouter>
    <Routes>
      <Route path={HOME_URL} element={<HomePage />} />
      <Route path={LOGIN_URL} element={<SignInPage />} />
      <Route path={REGISTER_URL} element={<SignUpPage />} />
      <Route path={USER_URL} element={<UserPage />} />
      <Route path={SEARCH_URL} element={<SearchPage />} />
      <Route path={CLUB_URL} element={<ClubDetails />} />
    </Routes>
  </BrowserRouter>
);
