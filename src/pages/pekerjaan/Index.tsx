import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { requestGetPekerjaan } from '../../api/pekerjaan/services/requestGetPekerjaan';
import { requestDeletePekerjaan } from '../../api/pekerjaan/services/requestDeletePekerjaan';
import Table from './Table/Index';
import ButtonIcon from '../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../components/searchs/SearchBasic';
import TippyDefault from '../../components/tippys/default/TippyDefault';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';

interface PekerjaanList {
  id_pekerjaan: string;
  nama_pekerjaan: string;
}

const Pekerjaan: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    pekerjaanList: [] as PekerjaanList[],
    initialPekerjaanList: [] as PekerjaanList[],
    searchQuery: '' as string,
  });

  const { pekerjaanList, initialPekerjaanList, searchQuery } = state;

  useEffect(() => {
    dispatch(setPageTitle('Admin | Pekerjaan'));

    requestGetPekerjaan().then((response: PekerjaanList[]) => {
      setState((prevState) => ({ ...prevState, pekerjaanList: response, initialPekerjaanList: response }));
    });
  }, [dispatch]);

  const filterPekerjaanList = useCallback(
    debounce((query: string) => {
      const filteredData = initialPekerjaanList.filter((item) => item?.nama_pekerjaan.toLowerCase().includes(query.toLowerCase()));
      setState((prevState) => ({ ...prevState, pekerjaanList: filteredData }));
    }, 500),
    [initialPekerjaanList]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setState((prevState) => ({ ...prevState, searchQuery: query }));
    filterPekerjaanList(query);
  };

  const handleDelete = async (id_pekerjaan: string) => {
    const isDeleted = await requestDeletePekerjaan(id_pekerjaan);
    if (isDeleted) {
      requestGetPekerjaan().then((response: PekerjaanList[]) => {
        setState((prevState) => ({ ...prevState, pekerjaanList: response as PekerjaanList[] }));
      });
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Pekerjaan"
        menus={[
          {
            label: 'Pekerjaan',
            link: '/pekerjaan',
            icon: 'pajamas:work',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={searchQuery} placeholder="Cari Pekerjaan..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/pekerjaan/tambah-pekerjaan'}>
            <TippyDefault content="Tambah Pekerjaan">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table pekerjaan={pekerjaanList} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Pekerjaan;
