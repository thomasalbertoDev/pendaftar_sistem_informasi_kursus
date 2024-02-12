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
        childTitle: 'Master 1',
        childLink: '/master-1',
      },
      {
        childTitle: 'Master 2',
        childLink: '/master-2',
      },
      {
        childTitle: 'Master 3',
        childLink: '/master-3',
      },
    ],
  },
];
