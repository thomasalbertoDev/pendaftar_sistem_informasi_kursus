import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { requestGetPenghasilan } from '../../api/penghasilan/services/requestGetPenghasilan';
import { requestDeletePenghasilan } from '../../api/penghasilan/services/requestDeletePenghasilan';
import Table from './Table/Index';
import ButtonIcon from '../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../components/searchs/SearchBasic';
import TippyDefault from '../../components/tippys/default/TippyDefault';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';

const Penghasilan: React.FC = () => {
  const dispatch = useDispatch();
  const [penghasilanList, setPenghasilanList] = useState<any[]>([]);
  const [initialPenghasilanList, setInitialPenghasilanList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Penghasilan'));

    requestGetPenghasilan().then((response) => {
      setPenghasilanList(response);
      setInitialPenghasilanList(response);
    });
  }, [dispatch]);

  const filterPenghasilanList = useCallback(
    debounce((query: string) => {
      const filteredData = initialPenghasilanList.filter((item) => item?.jumlah_penghasilan.toLowerCase().includes(query.toLowerCase()));
      setPenghasilanList(filteredData);
    }, 500),
    [initialPenghasilanList]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterPenghasilanList(query);
  };

  const handleDelete = async (id_penghasilan: string) => {
    const isDeleted = await requestDeletePenghasilan(id_penghasilan);
    if (isDeleted === true) {
      requestGetPenghasilan().then((response) => {
        setPenghasilanList(response);
        setInitialPenghasilanList(response);
      });
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Penghasilan"
        menus={[
          {
            label: 'Penghasilan',
            link: '/penghasilan',
            icon: 'material-symbols:money',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={searchQuery} placeholder="Cari Jumlah Penghasilan..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/penghasilan/tambah-penghasilan'}>
            <TippyDefault content="Tambah Jumlah Penghasilan">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table penghasilan={penghasilanList} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Penghasilan;
