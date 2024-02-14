import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useEffect, useState } from 'react';
import { requestGetProfilUser } from '../../api/profile/services/requestGetProfilUser';
import FormatTanggal from '../../helpers/FormatTanggal';
import IconPencilPaper from '../../components/Icons/IconPencilPaper';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';

const Profile = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    dispatch(setPageTitle('Admin | Profile'));

    requestGetProfilUser().then((response) => {
      setUser(response);
    });
  }, [dispatch]);

  return (
    <>
      <BreadcrumbsDefault
        header="Profile"
        menus={[
          {
            label: 'Profile',
            link: `/profile`,
            icon: 'mdi:user',
          },
        ]}
      />

      <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-xl p-4 mb-5 mt-10 bg-white dark:bg-black">
        <div className="flex items-center justify-between mb-10 px-5 mt-5">
          <h5 className="font-semibold text-lg dark:text-white-light">Profile Admin</h5>
          <Link to={`/profile/${user?.data?.id_users}`} className="ltr:ml-auto rtl:mr-auto btn btn-primary p-2 rounded-full">
            <IconPencilPaper />
          </Link>
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
