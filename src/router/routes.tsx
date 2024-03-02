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
const KursusDetail = lazy(() => import('../pages/kursus/KursusDetail'));

// PENDAFTARAN
const Pendaftaran = lazy(() => import('../pages/pendaftaran/Index'));
const AjukanPendaftaran = lazy(() => import('../pages/pendaftaran/Form/FormCreate'));
const UpdatePendaftaran = lazy(() => import('../pages/pendaftaran/Form/FormUpdate'));
const DataPendaftaran = lazy(() => import('../pages/pendaftaran/DataPendaftaran'));

// PEMBAYARAN
const Pembayaran = lazy(() => import('../pages/pembayaran/Index'));

// ERROR 404
const Error404 = lazy(() => import('../pages/Error404'));

const routes = [
  {
    path: '/',
    element: <Kursus />,
  },

  {
    path: '/kursus/:id_kursus',
    element: <KursusDetail />,
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

  {
    path: '/pendaftaran',
    element: <Pendaftaran />,
  },

  {
    path: '/pendaftaran/ajukan-pendaftaran',
    element: <AjukanPendaftaran />,
  },

  {
    path: '/pendaftaran/update-pendaftaran/:id_pendaftaran',
    element: <UpdatePendaftaran />,
  },

  {
    path: '/pendaftaran/data-pendaftaran/:id_pendaftaran',
    element: <DataPendaftaran />,
  },
  {
    path: '/pembayaran',
    element: <Pembayaran />,
  },

  // ERROR 404
  {
    path: '*',
    element: <Error404 />,
    layout: 'blank',
  },
];

export { routes };
