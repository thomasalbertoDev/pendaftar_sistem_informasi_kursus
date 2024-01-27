import { lazy } from 'react';

const Index = lazy(() => import('../pages/admin/dashboard/Index'));
const Login = lazy(() => import('../pages/admin/auth/SignIn'));
const Error404 = lazy(() => import('../pages/Error404'));

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
    path: '*',
    element: <Error404 />,
    layout: 'blank',
  },
];

export { routes };
