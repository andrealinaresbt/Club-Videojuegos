import {createBrowserRouter} from "react-router-dom";
export const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/home/:id/:nombre',
      element: <ParamsPage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/user/profile',
      element: <div>Perfil de usuario</div>,
    },
  ]);
  