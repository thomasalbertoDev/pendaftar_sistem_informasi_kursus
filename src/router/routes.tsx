import { lazy } from 'react';

// DASHBOARD
const Dashboard = lazy(() => import('../pages/dashboard/Index'));

// SIGN IN
const SignIn = lazy(() => import('../pages/auth/SignIn'));

// PROFILE
const Profile = lazy(() => import('../pages/profile/Index'));
const UpdateProfile = lazy(() => import('../pages/profile/UpdateProfile'));

// AGAMA
const Agama = lazy(() => import('../pages/agama/Index'));
const CreateAgama = lazy(() => import('../pages/agama/Form/FormCreate'));
const UpdateAgama = lazy(() => import('../pages/agama/Form/FormUpdate'));

// PEKERJAAN
const Pekerjaan = lazy(() => import('../pages/pekerjaan/Index'));
const CreatePekerjaan = lazy(() => import('../pages/pekerjaan/Form/FormCreate'));
const UpdatePekerjaan = lazy(() => import('../pages/pekerjaan/Form/FormUpdate'));

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

  {
    path: '/agama',
    element: <Agama />,
  },

  {
    path: '/agama/tambah-agama',
    element: <CreateAgama />,
  },

  {
    path: '/agama/update-agama/:id_agama',
    element: <UpdateAgama />,
  },

  {
    path: '/pekerjaan',
    element: <Pekerjaan />,
  },

  {
    path: '/pekerjaan/tambah-pekerjaan',
    element: <CreatePekerjaan />,
  },

  {
    path: '/pekerjaan/update-pekerjaan/:id_pekerjaan',
    element: <UpdatePekerjaan />,
  },

  // ERROR 404
  {
    path: '*',
    element: <Error404 />,
    layout: 'blank',
  },
];

export { routes };
