import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { requestGetAllUsers } from '../../api/users/services/requestGetAllUsers';
import Table from './Table/Index';
import ButtonIcon from '../../components/buttons/icon/ButtonIcon';
import SearchBasic from '../../components/searchs/SearchBasic';
import TippyDefault from '../../components/tippys/default/TippyDefault';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';

interface UsersList {
  nama: string;
  email: string;
  username: string;
  role: string;
  verifikasi_email: boolean;
  tanggal_verifikasi_email: string;
  foto_profile: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  no_telepon: string;
  alamat: string;
  instagram: string;
  whatsapp: string;
}

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    usersList: [] as UsersList[],
    initialUsersList: [] as UsersList[],
    searchQuery: '' as string,
  });

  const { usersList, initialUsersList, searchQuery } = state;

  useEffect(() => {
    dispatch(setPageTitle('Admin | Users'));

    requestGetAllUsers().then((response: UsersList[]) => {
      setState((prevState) => ({ ...prevState, usersList: response, initialUsersList: response }));
    });
  }, [dispatch]);

  const filterUsersList = useCallback(
    debounce((query: string) => {
      const filteredData = initialUsersList.filter((item) => item?.email.toLowerCase().includes(query.toLowerCase()));
      setState((prevState) => ({ ...prevState, usersList: filteredData }));
    }, 500),
    [initialUsersList]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setState((prevState) => ({ ...prevState, searchQuery: query }));
    filterUsersList(query);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Users"
        menus={[
          {
            label: 'Users',
            link: '/users',
            icon: 'mdi:users',
          },
        ]}
      />

      <div className="flex justify-between items-center mt-10">
        <SearchBasic value={searchQuery} placeholder="Cari Email User..." onChange={handleSearch} width="w-1/2" />
        <div className="flex gap-3">
          <TippyDefault content="Refresh Halaman">
            <ButtonIcon icon="material-symbols:refresh" backgroundColor="btn-info" onClick={handleRefresh} />
          </TippyDefault>
        </div>
      </div>

      <div className="mt-5">
        <Table users={usersList} />
      </div>
    </>
  );
};

export default Users;
