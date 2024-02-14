import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { requestGetAgama } from '../../api/agama/services/requestGetAgama';
import { requestDeleteAgama } from '../../api/agama/services/requestDeleteAgama';
import Table from './Table/Index';
import ButtonIcon from '../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../components/searchs/SearchBasic';
import TippyDefault from '../../components/tippys/default/TippyDefault';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';

const Agama: React.FC = () => {
  const dispatch = useDispatch();
  const [agamaList, setAgamaList] = useState<any[]>([]);
  const [initialAgamaList, setInitialAgamaList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Agama'));

    requestGetAgama().then((response: object[]) => {
      setAgamaList(response);
      setInitialAgamaList(response);
    });
  }, [dispatch]);

  const filterAgamaList = useCallback(
    debounce((query: string) => {
      const filteredData = initialAgamaList.filter((item) => item.nama_agama.toLowerCase().includes(query.toLowerCase()));
      setAgamaList(filteredData);
    }, 500),
    [initialAgamaList]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterAgamaList(query);
  };

  const handleDelete = async (id_agama: string) => {
    const isDeleted = await requestDeleteAgama(id_agama);
    if (isDeleted) {
      requestGetAgama().then((response: object[]) => {
        setAgamaList(response);
        setInitialAgamaList(response);
      });
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Agama"
        menus={[
          {
            label: 'Agama',
            link: '/agama',
            icon: 'mdi:religion-christian',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={searchQuery} placeholder="Cari agama" onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/agama/tambah-agama'}>
            <TippyDefault content="Tambah Agama">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table agama={agamaList} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Agama;
