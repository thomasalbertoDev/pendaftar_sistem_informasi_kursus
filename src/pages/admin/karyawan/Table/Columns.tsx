import { Link } from 'react-router-dom';
import IconTrash from '../../../../components/Icons/IconTrash';
import IconPencil from '../../../../components/Icons/IconPencil';
import TippyDefault from '../../../../components/tippys/default/TippyDefault';
import FormatTanggal from '../../../../helpers/FormatTanggal';

interface ColumnsProps {
  handleDelete: (id_karyawan: string) => void;
}

const Columns = ({ handleDelete }: ColumnsProps) => {
  return [
    {
      id: 'index',
      key: 'index',
      title: 'No',
      width: 60,
      accessor: 'index',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.index + 1}</span>
        </>
      ),
    },
    {
      id: 'no_karyawan',
      key: 'no_karyawan',
      title: 'No Karyawan',
      accessor: 'no_karyawan',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.no_karyawan}</span>
        </>
      ),
    },
    {
      id: 'nama_karyawan',
      key: 'nama_karyawan',
      title: 'Nama Karyawan',
      accessor: 'nama_karyawan',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.nama_karyawan}</span>
        </>
      ),
    },
    {
      id: 'jenis_kelamin',
      key: 'jenis_kelamin',
      title: 'Jenis Kelamin',
      accessor: 'jenis_kelamin',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.jenis_kelamin}</span>
        </>
      ),
    },
    {
      id: 'tempat_lahir',
      key: 'tempat_lahir',
      title: 'Tempat Lahir',
      accessor: 'tempat_lahir',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.tempat_lahir}</span>
        </>
      ),
    },
    {
      id: 'tanggal_lahir',
      key: 'tanggal_lahir',
      title: 'Tanggal Lahir',
      accessor: 'tanggal_lahir',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{FormatTanggal(item.tanggal_lahir)}</span>
        </>
      ),
    },
    {
      id: 'tanggal_masuk',
      key: 'tanggal_masuk',
      title: 'Tanggal Masuk',
      accessor: 'tanggal_masuk',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{FormatTanggal(item.tanggal_masuk)}</span>
        </>
      ),
    },

    {
      id: 'agama',
      key: 'agama',
      title: 'Agama',
      accessor: 'agama',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.agama.nama_agama}</span>
        </>
      ),
    },
    {
      id: 'alamat',
      key: 'alamat',
      title: 'Alamat',
      accessor: 'alamat',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.alamat}</span>
        </>
      ),
    },
    {
      id: 'no_telp',
      key: 'no_telp',
      title: 'No Telp',
      accessor: 'no_telp',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.no_telp}</span>
        </>
      ),
    },
    {
      id: 'foto_karyawan',
      key: 'foto_karyawan',
      title: 'Foto Karwayan',
      accessor: 'foto_karyawan',
      render: (item: any) => (
        <>
          <img className="rounded-sm w-20 object-cover" src={`${import.meta.env.VITE_API_URL}/${item.foto_karyawan}`} alt="Foto Karyawan" />
        </>
      ),
    },
    {
      id: 'aksi',
      key: 'aksi',
      title: 'Aksi',
      accessor: 'aksi',
      render: (item: any) => (
        <>
          <div className="flex space-x-1 rtl:space-x-reverse gap-2">
            <Link to={`/karyawan/edit-karyawan/${item.id_karyawan}`}>
              <TippyDefault content="Edit">
                <IconPencil />
              </TippyDefault>
            </Link>
            <button onClick={() => handleDelete(item.id_karyawan)}>
              <TippyDefault content="Hapus">
                <IconTrash />
              </TippyDefault>
            </button>
          </div>
        </>
      ),
    },
  ];
};

export default Columns;
