import { Link } from 'react-router-dom';
import IconTrash from '../../../components/Icons/IconTrash';
import IconPencil from '../../../components/Icons/IconPencil';
import TippyDefault from '../../../components/tippys/default/TippyDefault';

interface ColumnsProps {
  handleDelete: (id_sekolah: string) => void;
}

const Columns = ({ handleDelete }: ColumnsProps) => {
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
      title: 'NPSN',
      accessor: 'npsn',
      render: (item: { npsn: number }) => (
        <>
          <span className="dark:text-white">{item?.npsn}</span>
        </>
      ),
    },
    {
      title: 'Nama Sekolah',
      accessor: 'nama_sekolah',
      render: (item: { nama_sekolah: string }) => (
        <>
          <span className="dark:text-white">{item?.nama_sekolah}</span>
        </>
      ),
    },
    {
      title: 'Alamat Sekolah',
      accessor: 'alamat',
      render: (item: { alamat: string }) => (
        <>
          <span className="dark:text-white">{item?.alamat}</span>
        </>
      ),
    },
    {
      title: 'Kode Pos',
      accessor: 'kode_pos',
      render: (item: { kode_pos: string }) => (
        <>
          <span className="dark:text-white">{item?.kode_pos}</span>
        </>
      ),
    },
    {
      title: 'Status Sekolah',
      accessor: 'status_sekolah',
      render: (item: { status_sekolah: string }) => (
        <>
          <span className="dark:text-white">{item?.status_sekolah}</span>
        </>
      ),
    },
    {
      title: 'Jenjang Pendidikan',
      accessor: 'jenjang_pendidikan',
      render: (item: { jenjang_pendidikan: string }) => (
        <>
          <span className="dark:text-white">{item?.jenjang_pendidikan}</span>
        </>
      ),
    },
    {
      title: 'Akreditasi Sekolah',
      accessor: 'akreditasi',
      render: (item: { akreditasi: string }) => (
        <>
          <span className="dark:text-white">{item?.akreditasi}</span>
        </>
      ),
    },
    {
      title: 'Email Sekolah',
      accessor: 'email_sekolah',
      render: (item: { email_sekolah: string }) => (
        <>
          <span className="dark:text-white">{item?.email_sekolah}</span>
        </>
      ),
    },
    {
      title: 'No Telepon Sekolah',
      accessor: 'no_telepon_sekolah',
      render: (item: { no_telepon_sekolah: string }) => (
        <>
          <span className="dark:text-white">+62{item?.no_telepon_sekolah}</span>
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
            <button onClick={() => handleDelete(item?.id_sekolah)}>
              <TippyDefault content="Hapus">
                <IconTrash className="dark:text-white" />
              </TippyDefault>
            </button>
          </div>
        </>
      ),
    },
  ];
};

export default Columns;
