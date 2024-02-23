import { lazy } from 'react';

// DASHBOARD
// const Dashboard = lazy(() => import('../pages/dashboard/Index'));

// SIGN IN
const SignIn = lazy(() => import('../pages/auth/SignIn'));

// SIGN UP
const SignUp = lazy(() => import('../pages/auth/SignUp'));

// VERIFY EMAIL
const Verify = lazy(() => import('../pages/auth/verify/Index'));
const VerifySuccess = lazy(() => import('../pages/auth/verify/VerifySuccess'));

// PROFILE
const Profile = lazy(() => import('../pages/profile/Index'));
const UpdateProfile = lazy(() => import('../pages/profile/UpdateProfile'));

// KURSUS
const Kursus = lazy(() => import('../pages/kursus/Index'));

// ERROR 404
const Error404 = lazy(() => import('../pages/Error404'));

const routes = [
  {
    path: '/',
    element: <Kursus />,
  },

  {
    path: '/sign-in',
    element: <SignIn />,
    layout: 'blank',
  },

  {
    path: '/sign-up',
    element: <SignUp />,
    layout: 'blank',
  },

  {
    path: '/verify',
    element: <Verify />,
    layout: 'blank',
  },

  {
    path: '/verify/verify-success',
    element: <VerifySuccess />,
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
