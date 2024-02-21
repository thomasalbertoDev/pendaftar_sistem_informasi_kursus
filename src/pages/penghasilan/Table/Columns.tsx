import { Link } from 'react-router-dom';
import IconTrash from '../../../components/Icons/IconTrash';
import IconPencil from '../../../components/Icons/IconPencil';
import TippyDefault from '../../../components/tippys/default/TippyDefault';

interface ColumnsProps {
  handleDelete: (id_penghasilan: string) => void;
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
      title: 'Jumlah Penghasilan',
      accessor: 'jumlah_penghasilan',
      render: (item: { jumlah_penghasilan: string }) => (
        <>
          <span className="dark:text-white">{item?.jumlah_penghasilan}</span>
        </>
      ),
    },
    {
      title: 'Aksi',
      accessor: 'aksi',
      render: (item: { id_penghasilan: string }) => (
        <>
          <div className="flex space-x-1 rtl:space-x-reverse gap-2">
            <Link to={`/penghasilan/update-penghasilan/${item?.id_penghasilan}`}>
              <TippyDefault content="Update">
                <IconPencil className="dark:text-white" />
              </TippyDefault>
            </Link>
            <button onClick={() => handleDelete(item?.id_penghasilan)}>
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
