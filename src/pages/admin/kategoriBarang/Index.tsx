import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { requestGetKategoriBarang } from './api/services/requestGetKategoriBarang';
import { requestDeleteKategoriBarang } from './api/services/requestDeleteKategoriBarang';
import { useCallback, useEffect, useState } from 'react';
import Table from './Table/Index';
import ButtonIcon from '../../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../../components/searchs/SearchBasic';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

const Index = () => {
  const dispatch = useDispatch();
  const [kategoriBarang, setKategoriBarang] = useState([]);
  const [initialRecords, setInitialRecords] = useState(kategoriBarang);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Kategori Barang'));

    requestGetKategoriBarang().then((kategoriBarangData) => {
      setKategoriBarang(kategoriBarangData);
      setInitialRecords(kategoriBarangData);
    });
  }, [dispatch]);

  const debounceSearch = useCallback(
    debounce((searchQuery) => {
      const filteredData = (initialRecords as any[]).filter((item) => item?.nama_kategori_barang.toLowerCase().includes(searchQuery.toLowerCase()));
      setInitialRecords(filteredData as never[]);
    }, 500),
    [kategoriBarang]
  );

  const handleSearch = (e: any) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
    debounceSearch(searchQuery);
  };

  const handleDelete = async (id_kategori_barang: string) => {
    const isDeleted = await requestDeleteKategoriBarang(id_kategori_barang);
    if (isDeleted) {
      requestGetKategoriBarang().then((kategoriBarangData) => {
        setKategoriBarang(kategoriBarangData);
        setInitialRecords(kategoriBarangData);
      });
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Kategori Barang"
        menus={[
          {
            label: 'Kategori Barang',
            link: '/kategori-barang',
            icon: 'mdi:list-box',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={search} placeholder="Cari Kategori Barang..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/kategori-barang/tambah-kategori-barang'}>
            <TippyDefault content="Tambah Kategori Barang">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table kategoriBarang={initialRecords} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Index;
