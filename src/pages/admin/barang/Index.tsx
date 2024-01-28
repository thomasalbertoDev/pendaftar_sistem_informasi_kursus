import { useDispatch } from 'react-redux';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import { useCallback, useEffect, useState } from 'react';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { requestGetBarang } from './api/services/requestGetBarang';
import { debounce } from 'lodash';
import { requestDeleteBarang } from './api/services/requestDeleteBarang';
import SearchBasic from '../../../components/searchs/SearchBasic';
import { Link } from 'react-router-dom';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import ButtonIcon from '../../../components/buttons/icon/ButtonIcon';
import Table from './Table/Index';

const Index = () => {
  const dispatch = useDispatch();
  const [barang, setBarang] = useState([]);
  const [initialRecords, setInitialRecords] = useState(barang);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Barang'));

    requestGetBarang().then((barangData) => {
      setBarang(barangData);
      setInitialRecords(barangData);
    });
  }, [dispatch]);

  const debounceSearch = useCallback(
    debounce((searchQuery) => {
      const filteredData = initialRecords.filter((item: any) => {
        const kodeBarang = String(item?.kode_barang || '').toLowerCase();
        const namaBarang = String(item?.nama_barang || '').toLowerCase();
        const searchLower = searchQuery.toLowerCase();

        return kodeBarang.includes(searchLower) || namaBarang.includes(searchLower);
      });
      setInitialRecords(filteredData as never[]);
    }, 500),
    [barang]
  );

  const handleSearch = (e: any) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
    debounceSearch(searchQuery);
  };

  const handleDelete = async (id_barang: string) => {
    const isDeleted = await requestDeleteBarang(id_barang);
    if (isDeleted) {
      requestGetBarang().then((barangData) => {
        setBarang(barangData);
        setInitialRecords(barangData);
      });
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Barang"
        menus={[
          {
            label: 'Barang',
            link: '/barang',
            icon: 'solar:box-bold',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={search} placeholder="Cari Nama Barang Atau Kode Barang..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/barang/tambah-barang'}>
            <TippyDefault content="Tambah Barang">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table barang={initialRecords} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Index;
