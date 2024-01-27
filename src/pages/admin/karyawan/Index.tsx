import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { requestGetKaryawan } from './api/services/requestGetKaryawan';
import { requestDeleteKaryawan } from './api/services/requestDeleteKaryawan';
import { useCallback, useEffect, useState } from 'react';
import Table from './Table/Index';
import SearchBasic from '../../../components/searchs/SearchBasic';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import ButtonIcon from '../../../components/buttons/icon/ButtonIcon';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

const Index = () => {
  const dispatch = useDispatch();
  const [karyawan, setKaryawan] = useState([]);
  const [initialRecords, setInitialRecords] = useState(karyawan);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Karyawan'));

    requestGetKaryawan().then((karyawanData) => {
      setKaryawan(karyawanData);
      setInitialRecords(karyawanData);
    });
  }, [dispatch]);

  const debounceSearch = useCallback(
    debounce((searchQuery) => {
      const filteredData = initialRecords.filter((item: any) => {
        const noKaryawan = String(item?.no_karyawan || '').toLowerCase();
        const namaKaryawan = String(item?.nama_karyawan || '').toLowerCase();
        const searchLower = searchQuery.toLowerCase();

        return noKaryawan.includes(searchLower) || namaKaryawan.includes(searchLower);
      });
      setInitialRecords(filteredData as never[]);
    }, 500),
    [karyawan]
  );

  const handleSearch = (e: any) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
    debounceSearch(searchQuery);
  };

  const handleDelete = async (id_karyawan: string) => {
    const isDeleted = await requestDeleteKaryawan(id_karyawan);
    if (isDeleted) {
      requestGetKaryawan().then((karyawanData) => {
        setKaryawan(karyawanData);
        setInitialRecords(karyawanData);
      });
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Karyawan"
        menus={[
          {
            label: 'Karyawan',
            link: '/karyawan',
            icon: 'clarity:employee-solid',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={search} placeholder="Cari Nama Karyawan Atau No Karyawan..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/karyawan/tambah-karyawan'}>
            <TippyDefault content="Tambah Karyawan">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table karyawan={initialRecords} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Index;
