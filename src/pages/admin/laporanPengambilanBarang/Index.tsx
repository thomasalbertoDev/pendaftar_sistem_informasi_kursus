import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { requestGetLaporanPengambilanBarang } from './api/services/requestGetLaporanPengambilanBarang';
import { debounce } from 'lodash';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import SearchBasic from '../../../components/searchs/SearchBasic';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import ButtonIcon from '../../../components/buttons/icon/ButtonIcon';
import Table from './Table/Index';

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
