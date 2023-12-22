import { lazy } from 'react';

const Index = lazy(() => import('../pages/admin/dashboard/Index'));
const Login = lazy(() => import('../pages/admin/auth/SignIn'));

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
];

export { routes };
