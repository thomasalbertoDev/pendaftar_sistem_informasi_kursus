import { lazy } from 'react';

// DASHBOARD
const Dashboard = lazy(() => import('../pages/admin/dashboard/Index'));

// AGAMA
const Agama = lazy(() => import('../pages/admin/agama/Index'));

// LOGIN
const Login = lazy(() => import('../pages/admin/auth/SignIn'));

// ERROR 404
const Error404 = lazy(() => import('../pages/Error404'));

const routes = [
  {
    path: '/',
    element: <Dashboard />,
  },

  // AGAMA
  {
    path: '/agama',
    element: <Agama />,
  },

  // LOGIN
  {
    path: '/login',
    element: <Login />,
    layout: 'blank',
  },

  // ERROR 404
  {
    path: '*',
    element: <Error404 />,
    layout: 'blank',
  },
];

export { routes };
