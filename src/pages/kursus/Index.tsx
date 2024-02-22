import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { requestGetKursus } from '../../api/kursus/services/requestGetKursus';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';
import { requestDeleteKursus } from '../../api/kursus/services/requestDeleteKursus';
import SearchBasic from '../../components/searchs/SearchBasic';
import { Link } from 'react-router-dom';
import TippyDefault from '../../components/tippys/default/TippyDefault';
import ButtonIcon from '../../components/buttons/icon/ButtonIcon';
import Table from './Table/Index';

interface KursusList {
  id_kursus: string;
  nama_kursus: string;
  topik_kursus: string;
  jenjang_kursus: string;
  pengajar_ID: string;
  jam_mulai: string;
  jam_selesai: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
  hari_kursus: string;
  harga_kursus: number;
  foto_kursus: string;
  syarat_kursus: string;
  deskripsi_kursus: string;
  modul_kursus: string;
}

const Kursus: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    kursusList: [] as KursusList[],
    initialKursusList: [] as KursusList[],
    searchQuery: '' as string,
  });

  const { kursusList, initialKursusList, searchQuery } = state;

  useEffect(() => {
    dispatch(setPageTitle('Admin | Kursus'));

    requestGetKursus().then((response: KursusList[]) => {
      setState((prevState) => ({ ...prevState, kursusList: response, initialKursusList: response }));
    });
  }, [dispatch]);

  const filterKursusList = useCallback(
    (query: string) => {
      const filteredData = initialKursusList.filter((item) => item?.nama_kursus.toLowerCase().includes(query.toLowerCase()));
      setState((prevState) => ({ ...prevState, kursusList: filteredData }));
    },
    [initialKursusList]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setState((prevState) => ({ ...prevState, searchQuery: query }));
    filterKursusList(query);
  };

  const handleDelete = async (id_kursus: string) => {
    const isDeleted = await requestDeleteKursus(id_kursus);
    if (isDeleted === true) {
      requestGetKursus().then((response: KursusList[]) => {
        setState((prevState) => ({ ...prevState, kursusList: response, initialKursusList: response }));
      });
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Kursus"
        menus={[
          {
            label: 'Kursus',
            link: '/kursus',
            icon: 'dashicons:welcome-learn-more',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={searchQuery} placeholder="Cari Nama Kursus..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/kursus/tambah-kursus'}>
            <TippyDefault content="Tambah Kursus">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table kursus={kursusList} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Kursus;
