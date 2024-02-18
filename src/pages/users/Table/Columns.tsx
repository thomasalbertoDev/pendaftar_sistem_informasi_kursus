import { Link } from 'react-router-dom';
import IconEye from '../../../components/Icons/IconEye';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import FormatTanggal from '../../../helpers/FormatTanggal';
import BadgeBasicSuccess from '../../../components/badges/basic/BadgeBasicSuccess';
import BadgeBasicPrimary from '../../../components/badges/basic/BadgesBasicPrimary';

const Columns = () => {
  return [
    {
      title: 'No',
      width: 60,
      accessor: 'index',
      render: (item: { index: number }) => (
        <>
          <span className="dark:text-white">{item?.index + 1}</span>
        </>
      ),
    },
    {
      title: 'Nama User',
      accessor: 'nama',
      render: (item: { nama: string }) => (
        <>
          <span className="dark:text-white">{item?.nama}</span>
        </>
      ),
    },
    {
      title: 'Email User',
      accessor: 'email',
      render: (item: { email: string }) => (
        <>
          <span className="dark:text-white">{item?.email}</span>
        </>
      ),
    },
    {
      title: 'Username User',
      accessor: 'username',
      render: (item: { username: string }) => (
        <>
          <span className="dark:text-white">{item?.username}</span>
        </>
      ),
    },
    {
      title: 'Tanggal Verifikasi Email',
      accessor: 'tanggal_verifikasi_email',
      render: (item: { tanggal_verifikasi_email: string }) => (
        <>
          <span className="dark:text-white">{FormatTanggal(item?.tanggal_verifikasi_email)}</span>
        </>
      ),
    },
    {
      title: 'Role',
      accessor: 'role',
      render: (item: { role: string }) => (
        <>
          <span className="dark:text-white">{item?.role === 'admin' ? <BadgeBasicSuccess label="Admin" /> : <BadgeBasicPrimary label="User" />}</span>
        </>
      ),
    },
    {
      title: 'Aksi',
      accessor: 'aksi',
      render: (item: { id_users: string }) => (
        <>
          <div className="flex space-x-1 rtl:space-x-reverse gap-2">
            <Link to={`/users/${item?.id_users}`}>
              <TippyDefault content="Lihat Data Users">
                <IconEye className="dark:text-white" />
              </TippyDefault>
            </Link>
          </div>
        </>
      ),
    },
  ];
};

export default Columns;
