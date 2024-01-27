import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { requestGetSatuanBarang } from './api/services/requestGetSatuanBarang';
import { requestDeleteSatuanBarang } from './api/services/requestDeleteSatuanBarang';
import { useCallback, useEffect, useState } from 'react';
import Table from './Table/Index';
import ButtonIcon from '../../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../../components/searchs/SearchBasic';
import TippyDefault from '../../../components/tippys/default/TippyDefault';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

const Index = () => {
  const dispatch = useDispatch();
  const [satuanBarang, setSatuanBarang] = useState([]);
  const [initialRecords, setInitialRecords] = useState(satuanBarang);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Satuan Barang'));

    requestGetSatuanBarang().then((satuanBarangData) => {
      setSatuanBarang(satuanBarangData);
      setInitialRecords(satuanBarangData);
    });
  }, [dispatch]);

  const debounceSearch = useCallback(
    debounce((searchQuery) => {
      const filteredData = (initialRecords as any[]).filter((item) => item?.nama_satuan_barang.toLowerCase().includes(searchQuery.toLowerCase()));
      setInitialRecords(filteredData as never[]);
    }, 500),
    [satuanBarang]
  );

  const handleSearch = (e: any) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
    debounceSearch(searchQuery);
  };

  const handleDelete = async (id_satuan_barang: string) => {
    const isDeleted = await requestDeleteSatuanBarang(id_satuan_barang);
    if (isDeleted) {
      requestGetSatuanBarang().then((satuanBarangData) => {
        setSatuanBarang(satuanBarangData);
        setInitialRecords(satuanBarangData);
      });
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Satuan Barang"
        menus={[
          {
            label: 'Satuan Barang',
            link: '/satuan-barang',
            icon: 'mdi:text-box',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={search} placeholder="Cari Satuan Barang..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/satuan-barang/tambah-satuan-barang'}>
            <TippyDefault content="Tambah Satuan Barang">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table satuanBarang={initialRecords} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Index;
