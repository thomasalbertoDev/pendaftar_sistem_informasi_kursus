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

// SATUAN BARANG
const SatuanBarang = lazy(() => import('../pages/admin/satuanBarang/Index'));
const TambahSatuanBarang = lazy(() => import('../pages/admin/satuanBarang/Form/FormAdd'));
const EditSatuanBarang = lazy(() => import('../pages/admin/satuanBarang/Form/FormEdit'));

// KARYAWAN
const Karyawan = lazy(() => import('../pages/admin/karyawan/Index'));
const TambahKaryawan = lazy(() => import('../pages/admin/karyawan/Form/FormAdd'));
const EditKaryawan = lazy(() => import('../pages/admin/karyawan/Form/FormEdit'));

// PEMASOK
const Pemasok = lazy(() => import('../pages/admin/pemasok/Index'));
const TambahPemasok = lazy(() => import('../pages/admin/pemasok/Form/FormAdd'));
const EditPemasok = lazy(() => import('../pages/admin/pemasok/Form/FormEdit'));

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

  // SATUAN BARANG
  {
    path: '/satuan-barang',
    element: <SatuanBarang />,
  },
  {
    path: '/satuan-barang/tambah-satuan-barang',
    element: <TambahSatuanBarang />,
  },
  {
    path: '/satuan-barang/edit-satuan-barang/:id_satuan_barang',
    element: <EditSatuanBarang />,
  },

  // KARYAWAN
  {
    path: '/karyawan',
    element: <Karyawan />,
  },
  {
    path: '/karyawan/tambah-karyawan',
    element: <TambahKaryawan />,
  },
  {
    path: '/karyawan/edit-karyawan/:id_karyawan',
    element: <EditKaryawan />,
  },

  // PEMASOK
  {
    path: '/pemasok',
    element: <Pemasok />,
  },
  {
    path: '/pemasok/tambah-pemasok',
    element: <TambahPemasok />,
  },
  {
    path: '/pemasok/edit-pemasok/:id_pemasok',
    element: <EditPemasok />,
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
