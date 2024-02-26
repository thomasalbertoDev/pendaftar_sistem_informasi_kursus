import { Link } from 'react-router-dom';
import IconPencil from '../../../components/Icons/IconPencil';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import BadgeBasicDanger from '../../../components/badges/basic/BadgeBasicDanger';
import BadgeBasicWarning from '../../../components/badges/basic/BadgeBasicWarning';
import BadgeBasicSuccess from '../../../components/badges/basic/BadgeBasicSuccess';

const Columns = () => {
  return [
    {
      title: 'NISN',
      accessor: 'nisn',
      render: (item: { nisn: number }) => (
        <>
          <span className="dark:text-white">{item?.nisn}</span>
        </>
      ),
    },
    {
      title: 'NIS',
      accessor: 'nis',
      render: (item: { nis: number }) => (
        <>
          <span className="dark:text-white">{item?.nis}</span>
        </>
      ),
    },
    {
      title: 'Email',
      accessor: 'email',
      render: (item: { email: string }) => (
        <>
          <span className="dark:text-white">{item?.email}</span>
        </>
      ),
    },
    {
      title: 'Nama Lengkap',
      accessor: 'nama_lengkap',
      render: (item: { nama_lengkap: string }) => (
        <>
          <span className="dark:text-white">{item?.nama_lengkap}</span>
        </>
      ),
    },
    {
      title: 'Asal Sekolah',
      accessor: 'sekolah',
      render: (item: { sekolah: { nama_sekolah: string } }) => (
        <>
          <span className="dark:text-white">{item?.sekolah?.nama_sekolah}</span>
        </>
      ),
    },
    {
      title: 'Kursus Yang Dipilih',
      accessor: 'kursus',
      render: (item: { kursus: { nama_kursus: string } }) => (
        <>
          <span className="dark:text-white">{item?.kursus?.nama_kursus}</span>
        </>
      ),
    },
    {
      title: 'Status Pendaftaran',
      accessor: 'status_pendaftaran',
      render: (item: { status_pendaftaran: string }) => (
        <>
          {item?.status_pendaftaran === 'Diproses' ? (
            <BadgeBasicWarning label="Diproses" />
          ) : item?.status_pendaftaran === 'Diterima' ? (
            <BadgeBasicSuccess label="Diterima" />
          ) : (
            <BadgeBasicDanger label="Ditolak" />
          )}
        </>
      ),
    },

    {
      title: 'Aksi',
      accessor: 'aksi',
      render: (item: { id_sekolah: string }) => (
        <>
          <div className="flex space-x-1 rtl:space-x-reverse gap-2">
            <Link to={`/sekolah/update-sekolah/${item?.id_sekolah}`}>
              <TippyDefault content="Update">
                <IconPencil className="dark:text-white" />
              </TippyDefault>
            </Link>
          </div>
        </>
      ),
    },
  ];
};

export default Columns;
