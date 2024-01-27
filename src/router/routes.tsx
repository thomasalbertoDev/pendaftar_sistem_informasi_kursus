import { lazy } from 'react';

// DASHBOARD
const Dashboard = lazy(() => import('../pages/admin/dashboard/Index'));

// AGAMA
const Agama = lazy(() => import('../pages/admin/agama/Index'));
const TambahAgama = lazy(() => import('../pages/admin/agama/Form/FormAdd'));
const EditAgama = lazy(() => import('../pages/admin/agama/Form/FormEdit'));

// KATEGORI BARANG
const KategoriBarang = lazy(() => import('../pages/admin/kategoriBarang/Index'));
const TambahKategoriBarang = lazy(() => import('../pages/admin/kategoriBarang/Form/FormAdd'));
const EditKategoriBarang = lazy(() => import('../pages/admin/kategoriBarang/Form/FormEdit'));

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
  {
    path: '/agama/tambah-agama',
    element: <TambahAgama />,
  },
  {
    path: '/agama/edit-agama/:id_agama',
    element: <EditAgama />,
  },

  // KATEGORI BARANG
  {
    path: '/kategori-barang',
    element: <KategoriBarang />,
  },
  {
    path: '/kategori-barang/tambah-kategori-barang',
    element: <TambahKategoriBarang />,
  },
  {
    path: '/kategori-barang/edit-kategori-barang/:id_kategori_barang',
    element: <EditKategoriBarang />,
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
