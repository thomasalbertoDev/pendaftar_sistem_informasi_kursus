import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { validationSchema } from './validationSchema';
import { requestGetProfilUser } from '../../api/profile/services/requestGetProfilUser';
import { requestUpdateProfilUser } from '../../api/profile/services/requestUpdateProfilUser';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../components/buttons/solid/ButtonSolidDanger';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';
import ButtonSolidPrimary from '../../components/buttons/solid/ButtonSolidPrimary';

interface User {
  [x: string]: any;
  id_users: string;
  nama: string;
  email: string;
  username: string;
  role: string;
  verifikasi_email: boolean;
  tanggal_verifikasi_email: string;
  foto_profil: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  no_telepon: string;
  alamat: string;
  instagram: string;
  whatsapp: string;
}

const Profile: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id_users } = useParams<{ id_users: string }>();
  const [imagePreview, setImagePreview] = useState<string>('');
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    dispatch(setPageTitle('Admin | Profile'));

    requestGetProfilUser().then((response: User | undefined) => {
      setUser(response?.data);
    });
  }, [dispatch]);

  const initialValues: Partial<User> = {
    nama: user?.nama || '',
    foto_profil: user?.foto_profil || '',
    tempat_lahir: user?.tempat_lahir || '',
    tanggal_lahir: user?.tanggal_lahir || '',
    jenis_kelamin: user?.jenis_kelamin || '',
    no_telepon: user?.no_telepon || '',
    alamat: user?.alamat || '',
    instagram: user?.instagram || '',
    whatsapp: user?.whatsapp || '',
  };

  const handleUpdateProfile = async (values: any): Promise<any> => {
    const request = await requestUpdateProfilUser(id_users ?? '', values);
    if (request) {
      navigate(`/profile`);
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Update Profile"
        menus={[
          {
            label: 'Profile',
            link: `/profile`,
            icon: 'mdi:user',
          },
          {
            label: 'Update Profile',
            link: `/profile/${id_users}`,
          },
        ]}
      />

      <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-xl p-5 mb-5 mt-10 bg-white dark:bg-black">
        <h5 className="font-semibold text-lg dark:text-white-dark mb-10 mt-5 px-5">Update Profile Admin</h5>
        <div className="flex flex-col sm:flex-row">
          <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
            {imagePreview ? (
              <img src={imagePreview} alt="Iamge Preview" className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover mx-auto" loading="lazy" />
            ) : (
              <img src={`${import.meta.env.VITE_API_URL}/${user?.foto_profil}`} alt="img" className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover mx-auto" loading="lazy" />
            )}
          </div>

          <div className="flex-1">
            <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleUpdateProfile}>
              {({ errors, handleChange, submitCount, values, setFieldValue }) => (
                <>
                  <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} setFieldValue={setFieldValue} setImagePreview={setImagePreview} />

                  <div className="md:flex justify-end mx-5 gap-3">
                    <ButtonSolidPrimary text={'Update Profil'} width={'md:w-auto w-full'} onClick={() => handleUpdateProfile(values)} />
                    <Link to={'/profile'}>
                      <ButtonSolidDanger text={'Batal'} width={'md:w-auto w-full'} />
                    </Link>
                  </div>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
