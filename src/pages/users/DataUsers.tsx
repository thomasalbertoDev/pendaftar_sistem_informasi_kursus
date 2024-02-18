import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { requestGetUsersByID } from '../../api/users/services/requestGetUsersByID';
import FormatTanggal from '../../helpers/FormatTanggal';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';

interface Users {
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

interface UsersResponse {
  data: Users;
}

const Profile: React.FC = () => {
  const { id_users } = useParams<{ id_users: string }>();
  const dispatch = useDispatch();
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    dispatch(setPageTitle('Admin | Users'));

    requestGetUsersByID(id_users ?? '').then((response: UsersResponse | never[]) => {
      setUser(response);
    });
  }, [dispatch, id_users]);

  return (
    <>
      <BreadcrumbsDefault
        header="Users"
        menus={[
          {
            label: 'Users',
            link: `/users`,
            icon: 'mdi:users',
          },
        ]}
      />

      <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-xl p-4 mb-5 mt-10 bg-white dark:bg-black">
        <div className="flex items-center justify-between mb-10 px-5 mt-5">
          <h5 className="font-semibold text-lg dark:text-white-light">Data Users</h5>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
            <img src={`${import.meta.env.VITE_API_URL}/${user?.data?.foto_profil}`} alt="img" className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover mx-auto" />
          </div>

          <div className="flex-1">
            <table className="table-auto border-none border-b-0">
              <tbody>
                <tr className="border-none">
                  <td>Nama Lengkap </td>
                  <td>: &nbsp; &nbsp; {user?.data?.nama ? user?.data?.nama : '-'}</td>
                </tr>
                <tr className="border-none">
                  <td>Email</td>
                  <td>: &nbsp; &nbsp; {user?.data?.email ? user?.data?.email : '-'}</td>
                </tr>
                <tr className="border-none">
                  <td>Username</td>
                  <td>: &nbsp; &nbsp; {user?.data?.username ? user?.data?.username : '-'}</td>
                </tr>
                <tr className="border-none">
                  <td>Role</td>
                  <td>: &nbsp; &nbsp; {user?.data?.role ? user?.data?.role : '-'}</td>
                </tr>
                <tr className="border-none">
                  <td>Tempat Lahir</td>
                  <td>: &nbsp; &nbsp; {user?.data?.tempat_lahir ? user?.data?.tempat_lahir : '-'}</td>
                </tr>
                <tr className="border-none">
                  <td>Tanggal Lahir</td>
                  <td>: &nbsp; &nbsp; {user?.data?.tanggal_lahir ? FormatTanggal(user?.data?.tanggal_lahir) : '-'}</td>
                </tr>
                <tr className="border-none">
                  <td>Jenis Kelamin</td>
                  <td>: &nbsp; &nbsp; {user?.data?.jenis_kelamin ? user?.data?.jenis_kelamin : '-'}</td>
                </tr>
                <tr className="border-none">
                  <td>No Telepon</td>
                  <td>: &nbsp; &nbsp; {user?.data?.no_telepon ? '+62' + user?.data?.no_telepon : '-'}</td>
                </tr>
                <tr className="border-none">
                  <td>Alamat</td>
                  <td>: &nbsp; &nbsp; {user?.data?.alamat ? user?.data?.alamat : '-'}</td>
                </tr>
                <tr className="border-none">
                  <td>Instagram</td>
                  <td>
                    : &nbsp; &nbsp;
                    <a href={user?.data?.instagram ? user?.data?.instagram : '#'} className="text-primary">
                      {user?.data?.instagram ? 'Instagram' : '-'}
                    </a>
                  </td>
                </tr>
                <tr className="border-none">
                  <td>Whatsapp</td>
                  <td>: &nbsp; &nbsp; {user?.data?.whatsapp ? '+62' + user?.data?.whatsapp : '-'}</td>
                </tr>
                <tr className="border-none">
                  <td>Tanggal Verifikasi Email</td>
                  <td>: &nbsp; &nbsp; {user?.data?.tanggal_verifikasi_email ? FormatTanggal(user?.data?.tanggal_verifikasi_email) : '-'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
