import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { Link, useNavigate } from 'react-router-dom';
import { requestGetPengambilanBarang } from './api/services/requestGetPengambilanBarang';
import { useCallback, useEffect, useState } from 'react';
import { requestDeleteAllPengambilanBarang } from './api/services/requestDeleteAllPengambilanBarang';
import { requestDeletePengambilanBarangByID } from './api/services/requestDeletePengambilanBarangByID';
import Table from './Table/Index';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import SearchBasic from '../../../components/searchs/SearchBasic';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import ButtonIcon from '../../../components/buttons/icon/ButtonIcon';

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pengambilanBarang, setPengambilanBarang] = useState([]);
  const [initialRecords, setInitialRecords] = useState(pengambilanBarang);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Pengambilan Barang'));

    requestGetPengambilanBarang().then((pengambilanBarangData) => {
      setPengambilanBarang(pengambilanBarangData);
      setInitialRecords(pengambilanBarangData);
    });
  }, [dispatch]);

  const debounceSearch = useCallback(
    debounce((searchQuery) => {
      const filteredData = (initialRecords as any[]).filter((item) => item.barang.nama_barang.toLowerCase().includes(searchQuery.toLowerCase()));
      setInitialRecords(filteredData as never[]);
    }, 500),
    [pengambilanBarang]
  );

  const handleSearch = (e: any) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
    debounceSearch(searchQuery);
  };

  const handleDeleteByID = async (id_pengambilan_barang: string) => {
    const isDeleted = await requestDeletePengambilanBarangByID(id_pengambilan_barang);
    if (isDeleted) {
      requestGetPengambilanBarang().then((pengambilanBarangData) => {
        setPengambilanBarang(pengambilanBarangData);
        setInitialRecords(pengambilanBarangData);
      });
    }
  };

  const handleDeleteAll = async () => {
    const isDeletedAll = await requestDeleteAllPengambilanBarang();
    if (isDeletedAll) {
      requestGetPengambilanBarang().then((pengambilanBarangData) => {
        setPengambilanBarang(pengambilanBarangData);
        setInitialRecords(pengambilanBarangData);
      });

      navigate('/laporan-pengambilan-barang');
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Pengambilan Barang"
        menus={[
          {
            label: 'Pengambilan Barang',
            link: '/pengambilan-barang',
            icon: 'lets-icons:box-open-fill',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={search} placeholder="Cari Barang..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/pengambilan-barang/tambah-pengambilan-barang'}>
            <TippyDefault content="Tambah Pengambilan Barang ">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Simpan Semua Data Ke Laporan">
            <ButtonIcon icon="icon-park-outline:return" backgroundColor="btn-success" onClick={handleDeleteAll} />
          </TippyDefault>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table pengambilanBarang={initialRecords} handleDeleteByID={handleDeleteByID} />
      </div>
    </>
  );
};

export default Index;
