import BreadcrumbsBasic from '../../../components/breadcrumbs/BreadcrumbsBasic';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import TableBasic from '../../../components/tables/TableBasic';

const Index = () => {
  // const columns = [
  //   { accessor: 'id', title: 'ID' },
  //   { accessor: 'firstName', title: 'First Name' },
  //   { accessor: 'lastName', title: 'Last Name' },
  //   { accessor: 'email', title: 'Email' },
  //   { accessor: 'phone', title: 'Phone' },
  // ];

  const menus = [
    { label: 'Home', link: '/' },
    { label: 'Category', link: '/category' },
    { label: 'Subcategory', link: '/category/subcategory' },
    // Tambahkan menu tambahan jika diperlukan
  ];

  return (
    <>
      {/* <h1>Hello World</h1> */}
      <BreadcrumbsBasic menus={menus} />
    </>
  );
};

export default Index;
