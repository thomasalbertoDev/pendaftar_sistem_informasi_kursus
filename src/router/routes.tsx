import { lazy } from 'react';

const Index = lazy(() => import('../pages/admin/dashboard/Index'));
const Login = lazy(() => import('../pages/admin/auth/SignIn'));
const Register = lazy(() => import('../pages/admin/auth/SignUp'));

const routes = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/login',
    element: <Login />,
    layout: 'blank',
  },
  {
    path: '/register',
    element: <Register />,
    layout: 'blank',
  },
];

export { routes };
