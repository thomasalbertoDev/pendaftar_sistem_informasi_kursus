import { Link } from 'react-router-dom';
import IconTrash from '../../../../components/Icons/IconTrash';
import IconPencil from '../../../../components/Icons/IconPencil';
import TippyDefault from '../../../../components/tippys/default/TippyDefault';

interface ColumnsProps {
  handleDelete: (id_satuan_barang: string) => void;
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
      id: 'nama_satuan_barang',
      key: 'nama_satuan_barang',
      title: 'Nama Satuan Barang',
      width: 1000,
      accessor: 'nama_satuan_barang',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.nama_satuan_barang}</span>
        </>
      ),
    },
    {
      id: 'aksi',
      key: 'aksi',
      title: 'Aksi',
      width: 400,
      accessor: 'aksi',
      render: (item: any) => (
        <>
          <div className="flex space-x-1 rtl:space-x-reverse gap-2">
            <Link to={`/satuan-barang/edit-satuan-barang/${item.id_satuan_barang}`}>
              <TippyDefault content="Edit">
                <IconPencil />
              </TippyDefault>
            </Link>
            <button onClick={() => handleDelete(item.id_satuan_barang)}>
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
