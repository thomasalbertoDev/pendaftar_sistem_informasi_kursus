export const SidebarMenu = [
  {
    title: 'Dashboard',
    icon: 'ic:round-dashboard',
    link: '/',
  },
  {
    title: 'Master',
    icon: 'material-symbols:database',
    link: '#',
    child: [
      {
        childTitle: 'Agama',
        childLink: '/agama',
      },
      {
        childTitle: 'Kategori Barang',
        childLink: '/kategori-barang',
      },
      {
        childTitle: 'Satuan Barang',
        childLink: '/satuan-barang',
      },
    ],
  },
  {
    title: 'Karyawan',
    icon: 'clarity:employee-solid',
    link: '/karyawan',
  },
  {
    title: 'Pemasok',
    icon: 'healthicons:city-worker',
    link: '/pemasok',
  },
  {
    title: 'Barang',
    icon: 'solar:box-bold',
    link: '/barang',
  },
  {
    title: 'Pengambilan Barang',
    icon: 'lets-icons:box-open-fill',
    link: '/pengambilan-barang',
  },
  {
    title: 'Barang Masuk',
    icon: 'material-symbols:box-add-sharp',
    link: '/barang-masuk',
  },
  {
    title: 'Laporan',
    icon: 'iconoir:book-solid',
    link: '#',
    child: [
      {
        childTitle: 'Pengambilan Barang',
        childLink: '/laporan-pengambilan-barang',
      },
      {
        childTitle: 'Barang Masuk',
        childLink: '/laporan-barang-masuk',
      },
    ],
  },
];
