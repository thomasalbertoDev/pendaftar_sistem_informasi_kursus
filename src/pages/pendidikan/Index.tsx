import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { requestGetPendidikan } from '../../api/pendidikan/services/requestGetPendidikan';
import { requestDeletePendidikan } from '../../api/pendidikan/services/requestDeletePendidikan';
import Table from './Table/Index';
import ButtonIcon from '../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../components/searchs/SearchBasic';
import TippyDefault from '../../components/tippys/default/TippyDefault';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';

interface PendidikanList {
  id_pendidikan: string;
  nama_pendidikan: string;
}

const Pendidikan: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    pendidikanList: [] as PendidikanList[],
    initialPendidikanList: [] as PendidikanList[],
    searchQuery: '' as string,
  });

  const { pendidikanList, initialPendidikanList, searchQuery } = state;

  useEffect(() => {
    dispatch(setPageTitle('Admin | Pendidikan'));

    requestGetPendidikan().then((response: PendidikanList[]) => {
      setState((prevState) => ({ ...prevState, pendidikanList: response, initialPendidikanList: response }));
    });
  }, [dispatch]);

  const filterPendidikanList = useCallback(
    debounce((query: string) => {
      const filteredData = initialPendidikanList.filter((item) => item?.nama_pendidikan.toLowerCase().includes(query.toLowerCase()));
      setState((prevState) => ({ ...prevState, pendidikanList: filteredData }));
    }, 500),
    [initialPendidikanList]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setState((prevState) => ({ ...prevState, searchQuery: query }));
    filterPendidikanList(query);
  };

  const handleDelete = async (id_pendidikan: string) => {
    const isDeleted = await requestDeletePendidikan(id_pendidikan);
    if (isDeleted === true) {
      requestGetPendidikan().then((response: PendidikanList[]) => {
        setState((prevState) => ({ ...prevState, pendidikanList: response as PendidikanList[] }));
      });
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Pendidikan"
        menus={[
          {
            label: 'Pendidikan',
            link: '/pendidikan',
            icon: 'bxs:graduation',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={searchQuery} placeholder="Cari Pendidikan..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/pendidikan/tambah-pendidikan'}>
            <TippyDefault content="Tambah Pendidikan">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table pendidikan={pendidikanList} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Pendidikan;
