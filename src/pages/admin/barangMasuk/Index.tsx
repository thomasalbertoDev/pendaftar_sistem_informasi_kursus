import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { Link, useNavigate } from 'react-router-dom';
import { requestGetBarangMasuk } from './api/services/requestGetBarangMasuk';
import { requestDeleteAllBarangMasuk } from './api/services/requestDeleteAllBarangMasuk';
import { requestDeleteBarangMasukByID } from './api/services/requestDeleteBarangMasukByID';
import { useCallback, useEffect, useState } from 'react';
import Table from './Table/Index';
import ButtonIcon from '../../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../../components/searchs/SearchBasic';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [barangMasuk, setBarangMasuk] = useState([]);
  const [initialRecords, setInitialRecords] = useState(barangMasuk);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Barang Masuk'));

    requestGetBarangMasuk().then((barangMasukData) => {
      setBarangMasuk(barangMasukData);
      setInitialRecords(barangMasukData);
    });
  }, [dispatch]);

  const debounceSearch = useCallback(
    debounce((searchQuery) => {
      const filteredData = (initialRecords as any[]).filter((item) => item.barang.nama_barang.toLowerCase().includes(searchQuery.toLowerCase()));
      setInitialRecords(filteredData as never[]);
    }, 500),
    [barangMasuk]
  );

  const handleSearch = (e: any) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
    debounceSearch(searchQuery);
  };

  const handleDeleteByID = async (id_barang_masuk: string) => {
    const isDeleted = await requestDeleteBarangMasukByID(id_barang_masuk);
    if (isDeleted) {
      requestGetBarangMasuk().then((barangMasukData) => {
        setBarangMasuk(barangMasukData);
        setInitialRecords(barangMasukData);
      });
    }
  };

  const handleDeleteAll = async () => {
    const isDeletedAll = await requestDeleteAllBarangMasuk();
    if (isDeletedAll) {
      requestGetBarangMasuk().then((barangMasukData) => {
        setBarangMasuk(barangMasukData);
        setInitialRecords(barangMasukData);
      });

      navigate('/laporan-barang-masuk');
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Barang Masuk"
        menus={[
          {
            label: 'Barang Masuk',
            link: '/barang-masuk',
            icon: 'material-symbols:box-add-sharp',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={search} placeholder="Cari Barang..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/barang-masuk/tambah-barang-masuk'}>
            <TippyDefault content="Tambah Barang Masuk">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Simpan Semua Data Ke Laporan Barang Masuk">
            <ButtonIcon icon="icon-park-outline:return" backgroundColor="btn-success" onClick={handleDeleteAll} />
          </TippyDefault>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table barangMasuk={initialRecords} handleDeleteByID={handleDeleteByID} />
      </div>
    </>
  );
};

export default Index;
