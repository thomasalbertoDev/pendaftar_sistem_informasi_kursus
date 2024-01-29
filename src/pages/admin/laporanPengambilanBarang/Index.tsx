import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { downloadExcel } from 'react-export-table-to-excel';
import { useCallback, useEffect, useState } from 'react';
import { requestGetLaporanPengambilanBarang } from './api/services/requestGetLaporanPengambilanBarang';
import Table from './Table/Index';
import ButtonIcon from '../../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../../components/searchs/SearchBasic';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import FormatTanggal from '../../../helpers/FormatTanggal';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

const Index = () => {
  const dispatch = useDispatch();
  const [laporanPengambilanBarang, setLaporanPengambilanBarang] = useState([]);
  const [initialRecords, setInitialRecords] = useState(laporanPengambilanBarang);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Laporan Pengambilan Barang'));

    requestGetLaporanPengambilanBarang().then((laporanPengambilanBarangData) => {
      setLaporanPengambilanBarang(laporanPengambilanBarangData);
      setInitialRecords(laporanPengambilanBarangData);
    });
  }, [dispatch]);

  const debounceSearch = useCallback(
    debounce((searchQuery) => {
      const filteredData = (initialRecords as any[]).filter((item) => item.barang.nama_barang.toLowerCase().includes(searchQuery.toLowerCase()));
      setInitialRecords(filteredData as never[]);
    }, 500),
    [laporanPengambilanBarang]
  );

  const handleSearch = (e: any) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
    debounceSearch(searchQuery);
  };

  const recordLaporanPengambilanBarang = () => {
    return initialRecords.map((item: any, index: any) => {
      return {
        index: index + 1,
        tanggal_pengambilan_barang: FormatTanggal(item?.tanggal_pengambilan_barang),
        kode_barang: item?.barang?.kode_barang,
        nama_barang: item?.barang?.nama_barang,
        keterangan_barang: item?.barang?.keterangan_barang,
        no_karyawan: item?.karyawan?.no_karyawan,
        nama_karyawan: item?.karyawan?.nama_karyawan,
        jumlah_pengambilan_barang: item?.jumlah_pengambilan_barang,
      };
    });
  };

  const handlePrintLaporanPengambilanBarang = () => {
    downloadExcel({
      fileName: 'Laporan Pengambilan Barang',
      sheet: 'react-export-table-to-excel',
      tablePayload: {
        header: ['No', 'Tanggal Pengambilan Barang', 'Kode Barang', 'Nama Barang', 'Keterangan Barang', 'No Karyawan', 'Nama Karyawan', 'Jumlah Pengambilan Barang'],
        body: recordLaporanPengambilanBarang(),
      },
    });
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Laporan Pengambilan Barang"
        menus={[
          {
            label: 'Laporan Pengambilan Barang',
            link: '/laporan-pengambilan-barang',
            icon: 'material-symbols:edit-note-outline',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={search} placeholder="Cari Barang..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <TippyDefault content="Cetak Laporan Pengambilan Barang">
            <ButtonIcon icon="mdi:printer" backgroundColor="btn-success" onClick={handlePrintLaporanPengambilanBarang} />
          </TippyDefault>
          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table laporanPengambilanBarang={initialRecords} />
      </div>
    </>
  );
};

export default Index;
