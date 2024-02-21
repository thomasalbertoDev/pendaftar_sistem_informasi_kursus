import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { requestGetSekolah } from '../../api/sekolah/services/requestGetSekolah';
import { requestDeleteSekolah } from '../../api/sekolah/services/requestDeleteSekolah';
import { useCallback, useEffect, useState } from 'react';
import Table from './Table/Index';
import ButtonIcon from '../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../components/searchs/SearchBasic';
import TippyDefault from '../../components/tippys/default/TippyDefault';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';

interface SekolahList {
  id_sekolah: string;
  npsn: number;
  nama_sekolah: string;
  alamat: string;
  kode_pos: number;
  provinsi: string;
  kabupaten: string;
  kecamatan: string;
  kelurahan: string;
  status_sekolah: string;
  jenjang_pendidikan: string;
  akreditasi: string;
  email_sekolah: string;
  no_telepon_sekolah: string;
}

const Sekolah: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    sekolahList: [] as SekolahList[],
    initialSekolahList: [] as SekolahList[],
    searchQuery: '' as string,
  });

  const { sekolahList, initialSekolahList, searchQuery } = state;

  useEffect(() => {
    dispatch(setPageTitle('Admin | Sekolah'));

    requestGetSekolah().then((response: SekolahList[]) => {
      setState((prevState) => ({ ...prevState, sekolahList: response, initialSekolahList: response }));
    });
  }, [dispatch]);

  const filterSekolahList = useCallback(
    debounce((query: string) => {
      const filteredData = initialSekolahList.filter((item) => item?.nama_sekolah.toLowerCase().includes(query.toLowerCase()));
      setState((prevState) => ({ ...prevState, sekolahList: filteredData }));
    }, 500),
    [initialSekolahList]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setState((prevState) => ({ ...prevState, searchQuery: query }));
    filterSekolahList(query);
  };

  const handleDelete = async (id_sekolah: string) => {
    const isDeleted = await requestDeleteSekolah(id_sekolah);
    if (isDeleted === true) {
      requestGetSekolah().then((response: SekolahList[]) => {
        setState((prevState) => ({ ...prevState, sekolahList: response as SekolahList[] }));
      });
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Sekolah"
        menus={[
          {
            label: 'Sekolah',
            link: '/sekolah',
            icon: 'emojione-monotone:school',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={searchQuery} placeholder="Cari Nama Sekolah..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <Link to={'/sekolah/tambah-sekolah'}>
            <TippyDefault content="Tambah Sekolah">
              <ButtonIcon icon="ic:baseline-plus" backgroundColor="btn-primary" />
            </TippyDefault>
          </Link>

          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table sekolah={sekolahList} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Sekolah;
