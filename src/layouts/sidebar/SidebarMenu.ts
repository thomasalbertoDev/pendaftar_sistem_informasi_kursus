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
    title: 'Sekolah',
    icon: 'emojione-monotone:school',
    link: '/sekolah',
  },
];
