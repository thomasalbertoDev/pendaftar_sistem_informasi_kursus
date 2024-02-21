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

interface PenghasilanList {
  id_penghasilan: string;
  jumlah_penghasilan: string;
}

const Penghasilan: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    penghasilanList: [] as PenghasilanList[],
    initialPenghasilanList: [] as PenghasilanList[],
    searchQuery: '' as string,
  });

  const { penghasilanList, initialPenghasilanList, searchQuery } = state;

  useEffect(() => {
    dispatch(setPageTitle('Admin | Penghasilan'));

    requestGetPenghasilan().then((response: PenghasilanList[]) => {
      setState((prevState) => ({ ...prevState, penghasilanList: response, initialPenghasilanList: response }));
    });
  }, [dispatch]);

  const filterPenghasilanList = useCallback(
    debounce((query: string) => {
      const filteredData = initialPenghasilanList.filter((item) => item?.jumlah_penghasilan.toLowerCase().includes(query.toLowerCase()));
      setState((prevState) => ({ ...prevState, penghasilanList: filteredData }));
    }, 500),
    [initialPenghasilanList]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setState((prevState) => ({ ...prevState, searchQuery: query }));
    filterPenghasilanList(query);
  };

  const handleDelete = async (id_penghasilan: string) => {
    const isDeleted = await requestDeletePenghasilan(id_penghasilan);
    if (isDeleted === true) {
      requestGetPenghasilan().then((response: PenghasilanList[]) => {
        setState((prevState) => ({ ...prevState, penghasilanList: response as PenghasilanList[] }));
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
