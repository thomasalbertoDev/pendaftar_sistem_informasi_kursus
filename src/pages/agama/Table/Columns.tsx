import { Link } from 'react-router-dom';
import IconTrash from '../../../components/Icons/IconTrash';
import IconPencil from '../../../components/Icons/IconPencil';
import TippyDefault from '../../../components/tippys/default/TippyDefault';

interface ColumnsProps {
  handleDelete: (id_agama: string) => void;
}

const Columns = ({ handleDelete }: ColumnsProps) => {
  return [
    {
      title: 'No',
      width: 60,
      accessor: 'index',
      render: (item: { index: number }) => (
        <>
          <span className="dark:text-white">{item.index + 1}</span>
        </>
      ),
    },
    {
      title: 'Nama Agama',
      accessor: 'nama_agama',
      render: (item: { nama_agama: string }) => (
        <>
          <span className="dark:text-white">{item.nama_agama}</span>
        </>
      ),
    },
    {
      title: 'Aksi',
      width: 400,
      accessor: 'aksi',
      render: (item: { id_agama: string }) => (
        <>
          <div className="flex space-x-1 rtl:space-x-reverse gap-2">
            <Link to={`/agama/update-agama/${item.id_agama}`}>
              <TippyDefault content="Edit">
                <IconPencil className="dark:text-white" />
              </TippyDefault>
            </Link>
            <button onClick={() => handleDelete(item.id_agama)}>
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
