import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { requestGetPengajar } from '../../api/pengajar/services/requestGetPengajar';
import { requestDeletePengajar } from '../../api/pengajar/services/requestDeletePengajar';
import Table from './Table/Index';
import ButtonIcon from '../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../components/searchs/SearchBasic';
import TippyDefault from '../../components/tippys/default/TippyDefault';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';

interface PengajarList {
  id_pengajar: string;
  nama_pengajar: string;
  no_telepon_pengajar: string;
  gelar_pengajar: string;
  keahlian_pengajar: string;
  pengalaman_pengajar: string;
  foto_pengajar: string;
  sertifikat_pengajar: string;
}

const Pengajar: React.FC = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    pengajarList: [] as PengajarList[],
    initialPengajarList: [] as PengajarList[],
    searchQuery: '' as string,
  });

  const { pengajarList, initialPengajarList, searchQuery } = state;

  useEffect(() => {
    dispatch(setPageTitle('Admin | Pengajar'));

    requestGetPengajar().then((response: PengajarList[]) => {
      setState((prevState) => ({ ...prevState, pengajarList: response, initialPengajarList: response }));
    });
  }, [dispatch]);

  const filterPengajarList = useCallback(
    debounce((query: string) => {
      const filteredData = initialPengajarList.filter((item) => item?.nama_pengajar.toLowerCase().includes(query.toLowerCase()));
      setState((prevState) => ({ ...prevState, pengajarList: filteredData }));
    }, 500),
    [initialPengajarList]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setState((prevState) => ({ ...prevState, searchQuery: query }));
    filterPengajarList(query);
  };

  const handleDelete = async (id_pengajar: string) => {
    const isDeleted = await requestDeletePengajar(id_pengajar);
    if (isDeleted === true) {
      requestGetPengajar().then((response: PengajarList[]) => {
        setState((prevState) => ({ ...prevState, pengajarList: response, initialPengajarList: response }));
      });
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Pengajar"
        menus={[
          {
            label: 'Pengajar',
            link: '/pengajar',
            icon: 'mdi:teacher',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={searchQuery} placeholder="Cari Nama Pengajar..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/pengajar/tambah-pengajar'}>
            <TippyDefault content="Tambah Pengajar">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table pengajar={pengajarList} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Pengajar;
