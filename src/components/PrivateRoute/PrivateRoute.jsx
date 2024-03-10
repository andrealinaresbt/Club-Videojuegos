import { Navigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { HOME_URL, LOGIN_URL, USER_URL } from "../../constants/urls";

export function PrivateRoute({ children }) {
  const { user, isLoadingUser } = useUser();

  if (isLoadingUser) {
    return <h1>LOADING USER...</h1>;
  }

  if (!isLoadingUser && !user) {
    console.log(user);
    return <Navigate to={HOME_URL} />;
    
  }
  

  return children;
}