import { Link } from 'react-router-dom';
import IconTrash from '../../../components/Icons/IconTrash';
import IconPencil from '../../../components/Icons/IconPencil';
import TippyDefault from '../../../components/tippys/default/TippyDefault';

interface ColumnsProps {
  handleDelete: (id_pengajar: string) => void;
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
      title: 'Nama Pengajar',
      accessor: 'nama_pengajar',
      render: (item: { nama_pengajar: string }) => (
        <>
          <span className="dark:text-white">{item?.nama_pengajar}</span>
        </>
      ),
    },
    {
      title: 'No Telepon Pengajar',
      accessor: 'no_telepon_pengajar',
      render: (item: { no_telepon_pengajar: string }) => (
        <>
          <span className="dark:text-white">0{item?.no_telepon_pengajar}</span>
        </>
      ),
    },
    {
      title: 'Gelar Pengajar',
      accessor: 'gelar_pengajar',
      render: (item: { gelar_pengajar: string }) => (
        <>
          <span className="dark:text-white">{item?.gelar_pengajar}</span>
        </>
      ),
    },
    {
      title: 'Keahlian Pengajar',
      accessor: 'keahlian_pengajar',
      render: (item: { keahlian_pengajar: string }) => (
        <>
          <span className="dark:text-white">{item?.keahlian_pengajar}</span>
        </>
      ),
    },
    // {
    //   title: 'Pengalaman Pengajar',
    //   accessor: 'pengalaman_pengajar',
    //   render: (item: { pengalaman_pengajar: string }) => (
    //     <>
    //       <p className="dark:text-white" dangerouslySetInnerHTML={{ __html: item?.pengalaman_pengajar }}></p>
    //     </>
    //   ),
    // },
    {
      title: 'Foto Pengajar',
      accessor: 'foto_pengajar',
      render: (item: { foto_pengajar: string }) => (
        <>
          <img className="rounded-sm w-20 object-cover" src={`${import.meta.env.VITE_API_URL}/${item?.foto_pengajar}`} alt="Foto Pengajar" />
        </>
      ),
    },
    {
      title: 'Sertifikat Pengajar',
      accessor: 'sertifikat_pengajar',
      render: (item: { sertifikat_pengajar: string }) => (
        <>
          <a href={`${import.meta.env.VITE_API_URL}/${item?.sertifikat_pengajar}`} className="text-primary">
            Sertifikat Pengajar
          </a>
        </>
      ),
    },

    {
      title: 'Aksi',
      accessor: 'aksi',
      render: (item: { id_pengajar: string }) => (
        <>
          <div className="flex space-x-1 rtl:space-x-reverse gap-2">
            <Link to={`/pengajar/update-pengajar/${item?.id_pengajar}`}>
              <TippyDefault content="Edit">
                <IconPencil className="dark:text-white" />
              </TippyDefault>
            </Link>
            <button onClick={() => handleDelete(item?.id_pengajar)}>
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
