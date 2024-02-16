import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { requestGetSekolah } from '../../api/sekolah/services/requestGetSekolah';
import { useCallback, useEffect, useState } from 'react';
import { requestDeleteSekolah } from '../../api/sekolah/services/requestDeleteSekolah';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';
import SearchBasic from '../../components/searchs/SearchBasic';
import { Link } from 'react-router-dom';
import TippyDefault from '../../components/tippys/default/TippyDefault';
import ButtonIcon from '../../components/buttons/icon/ButtonIcon';
import Table from './Table/Index';

const Sekolah: React.FC = () => {
  const dispatch = useDispatch();
  const [sekolahList, setSekolahList] = useState<any[]>([]);
  const [initialSekolahList, setInitialSekolahList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Sekolah'));

    requestGetSekolah().then((response: any) => {
      setSekolahList(response);
      setInitialSekolahList(response);
    });
  }, [dispatch]);

  const filterSekolahList = useCallback(
    debounce((query: string) => {
      const filteredData = initialSekolahList.filter((item) => item?.nama_sekolah.toLowerCase().includes(query.toLowerCase()));
      setSekolahList(filteredData);
    }, 500),
    [initialSekolahList]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterSekolahList(query);
  };

  const handleDelete = async (id_sekolah: string) => {
    const isDeleted = await requestDeleteSekolah(id_sekolah);
    if (isDeleted === true) {
      requestGetSekolah().then((response) => {
        setSekolahList(response);
        setInitialSekolahList(response);
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
