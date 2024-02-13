import { lazy } from 'react';

// DASHBOARD
const Dashboard = lazy(() => import('../pages/dashboard/Index'));

// SIGN IN
const SignIn = lazy(() => import('../pages/auth/SignIn'));

// PROFILE
const Profile = lazy(() => import('../pages/profile/Index'));
const UpdateProfile = lazy(() => import('../pages/profile/UpdateProfile'));

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

  {
    path: '/profile',
    element: <Profile />,
  },

  {
    path: '/profile/:id_users',
    element: <UpdateProfile />,
  },

  // ERROR 404
  {
    path: '*',
    element: <Error404 />,
    layout: 'blank',
  },
];

export { routes };
