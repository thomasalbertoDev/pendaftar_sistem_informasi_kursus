export const SidebarMenu = [
  {
    title: 'Dashboard',
    icon: 'ic:round-dashboard',
    link: '/',
  },
  {
    title: 'Kategori',
    icon: 'material-symbols:category',
    link: '#',
    child: [
      {
        childTitle: 'Kategori 1',
        childLink: '/kategori-1',
      },
      {
        childTitle: 'Kategori 2',
        childLink: '/kategori-2',
      },
    ],
  },
];
