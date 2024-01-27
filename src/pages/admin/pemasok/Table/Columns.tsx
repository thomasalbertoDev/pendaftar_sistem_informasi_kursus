import { Link } from 'react-router-dom';
import IconTrash from '../../../../components/Icons/IconTrash';
import IconPencil from '../../../../components/Icons/IconPencil';
import TippyDefault from '../../../../components/tippys/default/TippyDefault';

interface ColumnsProps {
  handleDelete: (id_pemasok: string) => void;
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
      id: 'nama_pemasok',
      key: 'nama_pemasok',
      title: 'Nama Pemasok',
      accessor: 'nama_pemasok',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.nama_pemasok}</span>
        </>
      ),
    },
    {
      id: 'nama_kontak_pemasok',
      key: 'nama_kontak_pemasok',
      title: 'Nama Kontak Pemasok',
      accessor: 'nama_kontak_pemasok',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.nama_kontak_pemasok}</span>
        </>
      ),
    },
    {
      id: 'no_telp_pemasok',
      key: 'no_telp_pemasok',
      title: 'No Telp Pemasok',
      accessor: 'no_telp_pemasok',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.no_telp_pemasok}</span>
        </>
      ),
    },
    {
      id: 'alamat_pemasok',
      key: 'alamat_pemasok',
      title: 'Alamat Pemasok',
      accessor: 'alamat_pemasok',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.alamat_pemasok}</span>
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
            <Link to={`/pemasok/edit-pemasok/${item.id_pemasok}`}>
              <TippyDefault content="Edit">
                <IconPencil />
              </TippyDefault>
            </Link>
            <button onClick={() => handleDelete(item.id_pemasok)}>
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
