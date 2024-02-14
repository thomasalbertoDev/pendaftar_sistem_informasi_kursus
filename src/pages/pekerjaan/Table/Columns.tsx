import { Link } from 'react-router-dom';
import IconTrash from '../../../components/Icons/IconTrash';
import IconPencil from '../../../components/Icons/IconPencil';
import TippyDefault from '../../../components/tippys/default/TippyDefault';

interface ColumnsProps {
  handleDelete: (id_pekerjaan: string) => void;
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
      title: 'Nama Pekerjaan',
      accessor: 'nama_pekerjaan',
      render: (item: { nama_pekerjaan: string }) => (
        <>
          <span className="dark:text-white">{item?.nama_pekerjaan}</span>
        </>
      ),
    },
    {
      title: 'Aksi',
      accessor: 'aksi',
      render: (item: { id_pekerjaan: string }) => (
        <>
          <div className="flex space-x-1 rtl:space-x-reverse gap-2">
            <Link to={`/pekerjaan/update-pekerjaan/${item?.id_pekerjaan}`}>
              <TippyDefault content="Edit">
                <IconPencil className="dark:text-white" />
              </TippyDefault>
            </Link>
            <button onClick={() => handleDelete(item?.id_pekerjaan)}>
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
