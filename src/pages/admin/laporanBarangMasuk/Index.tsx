import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { downloadExcel } from 'react-export-table-to-excel';
import { requestGetLaporanBarangMasuk } from './api/services/requestGetLaporanBarangMasuk';
import { useCallback, useEffect, useState } from 'react';
import Table from './Table/Index';
import ButtonIcon from '../../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../../components/searchs/SearchBasic';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import FormatTanggal from '../../../helpers/FormatTanggal';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

const Index = () => {
  const dispatch = useDispatch();
  const [laporanBarangMasuk, setLaporanBarangMasuk] = useState([]);
  const [initialRecords, setInitialRecords] = useState(laporanBarangMasuk);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Laporan Barang Masuk'));

    requestGetLaporanBarangMasuk().then((laporanBarangMasukData) => {
      setLaporanBarangMasuk(laporanBarangMasukData);
      setInitialRecords(laporanBarangMasukData);
    });
  }, [dispatch]);

  const debounceSearch = useCallback(
    debounce((searchQuery) => {
      const filteredData = initialRecords.filter((item: any) => {
        const namaBarang = String(item?.barang.nama_barang || '').toLowerCase();
        const tanggalBarangMasuk = FormatTanggal(item?.tanggal_barang_masuk || '').toLowerCase();
        const searchLower = searchQuery.toLowerCase();

        return namaBarang.includes(searchLower) || tanggalBarangMasuk.includes(searchLower);
      });
      setInitialRecords(filteredData as never[]);
    }, 500),
    [laporanBarangMasuk]
  );

  const handleSearch = (e: any) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
    debounceSearch(searchQuery);
  };

  const recordLaporanBarangMasuk = () => {
    return initialRecords.map((item: any, index: any) => {
      return {
        index: index + 1,
        tanggal_barang_masuk: FormatTanggal(item?.tanggal_barang_masuk),
        kode_barang: item?.barang?.kode_barang,
        nama_barang: item?.barang?.nama_barang,
        pemasok: item?.barang?.pemasok?.nama_pemasok,
        jumlah_barang_masuk: item?.jumlah_barang_masuk,
      };
    });
  };

  const handlePrintLaporanBarangMasuk = () => {
    downloadExcel({
      fileName: 'Laporan Barang Masuk',
      sheet: 'react-export-table-to-excel',
      tablePayload: {
        header: ['No', 'Tanggal Barang Masuk', 'Kode Barang', 'Nama Barang', 'Pemasok', 'Jumlah Barang Masuk'],
        body: recordLaporanBarangMasuk(),
      },
    });
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Laporan Barang Masuk"
        menus={[
          {
            label: 'Laporan Barang Masuk',
            link: '/laporan-barang-masuk',
            icon: 'clarity:note-solid',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={search} placeholder="Cari Nama Barang Atau Tanggal Barang Masuk..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <TippyDefault content="Cetak Laporan Barang Masuk">
            <ButtonIcon icon="mdi:printer" backgroundColor="btn-success" onClick={handlePrintLaporanBarangMasuk} />
          </TippyDefault>
          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table laporanBarangMasuk={initialRecords} />
      </div>
    </>
  );
};

export default Index;
