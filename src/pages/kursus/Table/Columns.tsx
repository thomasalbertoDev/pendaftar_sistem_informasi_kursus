import { Link } from 'react-router-dom';
import IconEye from '../../../components/Icons/IconEye';
import IconTrash from '../../../components/Icons/IconTrash';
import IconPencil from '../../../components/Icons/IconPencil';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import FormatJam from '../../../helpers/FormatJam';
import FormatTanggal from '../../../helpers/FormatTanggal';

interface ColumnsProps {
  handleDelete: (id_kursus: string) => void;
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
      title: 'Nama Kursus',
      accessor: 'nama_kursus',
      render: (item: { nama_kursus: string }) => (
        <>
          <span className="dark:text-white">{item?.nama_kursus}</span>
        </>
      ),
    },
    {
      title: 'Topik Kursus',
      accessor: 'topik_kursus',
      render: (item: { topik_kursus: string }) => (
        <>
          <span className="dark:text-white">{item?.topik_kursus}</span>
        </>
      ),
    },
    {
      title: 'Pengajar Kursus',
      accessor: 'pengajar_ID',
      render: (item: { pengajar: { nama_pengajar: string } }) => (
        <>
          <span className="dark:text-white">{item?.pengajar?.nama_pengajar}</span>
        </>
      ),
    },
    {
      title: 'Jam Mulai Kursus',
      accessor: 'jam_mulai',
      render: (item: { jam_mulai: string }) => (
        <>
          <span className="dark:text-white">{FormatJam(item?.jam_mulai)}</span>
        </>
      ),
    },
    {
      title: 'Jam Selesai Kursus',
      accessor: 'jam_selesai',
      render: (item: { jam_selesai: string }) => (
        <>
          <span className="dark:text-white">{FormatJam(item?.jam_selesai)}</span>
        </>
      ),
    },
    {
      title: 'Tanggal Mulai Kursus',
      accessor: 'tanggal_mulai',
      render: (item: { tanggal_mulai: string }) => (
        <>
          <span className="dark:text-white">{FormatTanggal(item?.tanggal_mulai)}</span>
        </>
      ),
    },
    {
      title: 'Tanggal Selesai Kursus',
      accessor: 'tanggal_selesai',
      render: (item: { tanggal_selesai: string }) => (
        <>
          <span className="dark:text-white">{FormatTanggal(item?.tanggal_selesai)}</span>
        </>
      ),
    },
    {
      title: 'Aksi',
      accessor: 'aksi',
      render: (item: { id_kursus: string }) => (
        <>
          <div className="flex space-x-1 rtl:space-x-reverse gap-2">
            <Link to={`/kursus/${item?.id_kursus}`}>
              <TippyDefault content="Lihat Data Users">
                <IconEye className="dark:text-white" />
              </TippyDefault>
            </Link>
            <Link to={`/kursus/update-kursus/${item?.id_kursus}`}>
              <TippyDefault content="Update">
                <IconPencil className="dark:text-white" />
              </TippyDefault>
            </Link>
            <button onClick={() => handleDelete(item?.id_kursus)}>
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
