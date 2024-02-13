import { lazy } from 'react';

// DASHBOARD
const Dashboard = lazy(() => import('../pages/dashboard/Index'));

// SIGN INI
const SignIn = lazy(() => import('../pages/auth/SignIn'));

// ERROR 404
const Error404 = lazy(() => import('../pages/Error404'));

const routes = [
  {
    path: '/',
    element: <Dashboard />,
  },

  {
    path: '/sign-in',
    element: <SignIn />,
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
