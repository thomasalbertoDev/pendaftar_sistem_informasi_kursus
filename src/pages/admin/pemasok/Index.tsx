import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { requestGetPemasok } from './api/services/requestGetPemasok';
import { requestDeletePemasok } from './api/services/requestDeletePemasok';
import { useCallback, useEffect, useState } from 'react';
import Table from './Table/Index';
import ButtonIcon from '../../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../../components/searchs/SearchBasic';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

const Index = () => {
  const dispatch = useDispatch();
  const [pemasok, setPemasok] = useState([]);
  const [initialRecords, setInitialRecords] = useState(pemasok);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Pemasok'));

    requestGetPemasok().then((pemasokData) => {
      setPemasok(pemasokData);
      setInitialRecords(pemasokData);
    });
  }, [dispatch]);

  const debounceSearch = useCallback(
    debounce((searchQuery) => {
      const filteredData = initialRecords.filter((item: any) => {
        const namaPemasok = String(item?.nama_pemasok || '').toLowerCase();
        const namaKontakPemasok = String(item?.nama_kontak_pemasok || '').toLowerCase();
        const searchLower = searchQuery.toLowerCase();

        return namaKontakPemasok.includes(searchLower) || namaPemasok.includes(searchLower);
      });
      setInitialRecords(filteredData as never[]);
    }, 500),
    [pemasok]
  );

  const handleSearch = (e: any) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
    debounceSearch(searchQuery);
  };

  const handleDelete = async (id_pemasok: string) => {
    const isDeleted = await requestDeletePemasok(id_pemasok);
    if (isDeleted) {
      requestGetPemasok().then((pemasokData) => {
        setPemasok(pemasokData);
        setInitialRecords(pemasokData);
      });
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Pemasok"
        menus={[
          {
            label: 'Pemasok',
            link: '/pemasok',
            icon: 'healthicons:city-worker',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={search} placeholder="Cari Nama Pemasok Atau Nama Kontak Pemasok..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/pemasok/tambah-pemasok'}>
            <TippyDefault content="Tambah Pemasok">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table pemasok={initialRecords} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Index;
