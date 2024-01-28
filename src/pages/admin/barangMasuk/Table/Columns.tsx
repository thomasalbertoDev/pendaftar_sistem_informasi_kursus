import IconTrash from '../../../../components/Icons/IconTrash';
import TippyDefault from '../../../../components/tippys/default/TippyDefault';
import FormatTanggal from '../../../../helpers/FormatTanggal';

interface ColumnsProps {
  handleDeleteByID: (id_barang_masuk: string) => void;
}

const Columns = ({ handleDeleteByID }: ColumnsProps) => {
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
      id: 'tanggal_barang_masuk',
      key: 'tanggal_barang_masuk',
      title: 'Tanggal Barang Masuk',
      accessor: 'tanggal_barang_masuk',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{FormatTanggal(item.tanggal_barang_masuk)}</span>
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
          <span className="dark:text-white">{item.barang.kode_barang}</span>
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
          <span className="dark:text-white">{item.barang.nama_barang}</span>
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
          <span className="dark:text-white">{item.barang.pemasok.nama_pemasok}</span>
        </>
      ),
    },
    {
      id: 'jumlah_barang_masuk',
      key: 'jumlah_barang_masuk',
      title: 'Jumlah Barang Masuk',
      accessor: 'jumlah_barang_masuk',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.jumlah_barang_masuk}</span>
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
            <button onClick={() => handleDeleteByID(item.id_barang_masuk)}>
              <TippyDefault content="Cancle">
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
