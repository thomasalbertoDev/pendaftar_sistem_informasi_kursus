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
        childTitle: 'Pekerjaan',
        childLink: '/pekerjaan',
      },
      {
        childTitle: 'Pendidikan',
        childLink: '/pendidikan',
      },
      {
        childTitle: 'Penghasilan',
        childLink: '/penghasilan',
      },
    ],
  },
  {
    title: 'Users',
    icon: 'mdi:users',
    link: '/users',
  },
  {
    title: 'Sekolah',
    icon: 'emojione-monotone:school',
    link: '/sekolah',
  },
  {
    title: 'Pengajar',
    icon: 'mdi:teacher',
    link: '/pengajar',
  },
  {
    title: 'Kursus',
    icon: 'dashicons:welcome-learn-more',
    link: '/kursus',
  },
];
