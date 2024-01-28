import { Link } from 'react-router-dom';
import IconTrash from '../../../../components/Icons/IconTrash';
import IconPencil from '../../../../components/Icons/IconPencil';
import TippyDefault from '../../../../components/tippys/default/TippyDefault';

interface ColumnsProps {
  handleDelete: (id_barang: string) => void;
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
      id: 'kode_barang',
      key: 'kode_barang',
      title: 'Kode Barang',
      accessor: 'kode_barang',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.kode_barang}</span>
        </>
      ),
    },
    {
      id: 'nama_barang',
      key: 'nama_barang',
      title: 'Nama Barang',
      accessor: 'nama_barang',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.nama_barang}</span>
        </>
      ),
    },
    {
      id: 'kategori_barang',
      key: 'kategori_barang',
      title: 'Kategori Barang',
      accessor: 'kategori_barang',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.kategori_barang?.nama_kategori_barang}</span>
        </>
      ),
    },
    {
      id: 'stok_barang',
      key: 'stok_barang',
      title: 'Stok Barang',
      accessor: 'stok_barang',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.stok_barang}</span>
        </>
      ),
    },
    {
      id: 'satuan_barang',
      key: 'satuan_barang',
      title: 'Satuan Barang',
      accessor: 'satuan_barang',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.satuan_barang?.nama_satuan_barang}</span>
        </>
      ),
    },
    {
      id: 'lokasi_barang',
      key: 'lokasi_barang',
      title: 'Lokasi Barang',
      accessor: 'lokasi_barang',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.lokasi_barang}</span>
        </>
      ),
    },
    {
      id: 'pemasok',
      key: 'pemasok',
      title: 'Pemasok',
      accessor: 'pemasok',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.pemasok?.nama_pemasok}</span>
        </>
      ),
    },
    {
      id: 'keterangan_barang',
      key: 'keterangan_barang',
      title: 'Keterangan Barang',
      accessor: 'keterangan_barang',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.keterangan_barang}</span>
        </>
      ),
    },
    {
      id: 'foto_barang',
      key: 'foto_barang',
      title: 'Foto Barang',
      accessor: 'foto_barang',
      render: (item: any) => (
        <>
          <img className="rounded-sm w-20 object-cover" src={`${import.meta.env.VITE_API_URL}/${item.foto_barang}`} alt="Foto Barang" />
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
            <Link to={`/barang/edit-barang/${item.id_barang}`}>
              <TippyDefault content="Edit">
                <IconPencil />
              </TippyDefault>
            </Link>
            <button onClick={() => handleDelete(item.id_barang)}>
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
