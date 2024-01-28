import IconTrash from '../../../../components/Icons/IconTrash';
import TippyDefault from '../../../../components/tippys/default/TippyDefault';
import FormatTanggal from '../../../../helpers/FormatTanggal';

interface ColumnsProps {
  handleDeleteByID: (id_kategori_barang: string) => void;
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
      id: 'tanggal_pengambilan_barang',
      key: 'tanggal_pengambilan_barang',
      title: 'Tanggal Pengambilan Barang',
      accessor: 'tanggal_pengambilan_barang',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{FormatTanggal(item.tanggal_pengambilan_barang)}</span>
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
      id: 'no_karyawan',
      key: 'no_karyawan',
      title: 'No Karyawan',
      accessor: 'no_karyawan',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.karyawan.no_karyawan}</span>
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
          <span className="dark:text-white">{item.karyawan.nama_karyawan}</span>
        </>
      ),
    },
    {
      id: 'jumlah_pengambilan_barang',
      key: 'jumlah_pengambilan_barang',
      title: 'Jumlah Pengambilan Barang',
      accessor: 'jumlah_pengambilan_barang',
      render: (item: any) => (
        <>
          <span className="dark:text-white">{item.jumlah_pengambilan_barang}</span>
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
            <button onClick={() => handleDeleteByID(item.id_pengambilan_barang)}>
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
