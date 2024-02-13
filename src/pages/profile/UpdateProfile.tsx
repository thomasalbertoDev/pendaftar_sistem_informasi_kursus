import { Form, Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useEffect, useState } from 'react';
import { requestGetProfilUser } from '../../api/profile/services/requestGetProfilUser';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import InputText from '../../components/forms/Input/InputText';
import ButtonSolidPrimary from '../../components/buttons/solid/ButtonSolidPrimary';
import InputFile from '../../components/forms/Input/InputFile';
import DateDefault from '../../components/forms/date/DateDefault';
import TrimValue from '../../helpers/TrimValue';
import InputNumber from '../../components/forms/Input/InputNumber';
import { requestUpdateProfilUser } from '../../api/profile/services/requestUpdateProfilUser';
import JenisKelaminSelect from '../../utils/JenisKelaminSelect';
import ButtonSolidDanger from '../../components/buttons/solid/ButtonSolidDanger';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id_users } = useParams<{ id_users: string }>();
  const [user, setUser] = useState<any>({});
  const [data, setData] = useState<any>({
    nama: '',
    foto_profil: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    jenis_kelamin: '',
    no_telepon: '',
    alamat: '',
    instagram: '',
    whatsapp: '',
  });
  const [imagePreview, setImagePreview] = useState<string>('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Profile'));

    requestGetProfilUser().then((response) => {
      setUser(response);
      setData({
        nama: response?.data?.nama,
        foto_profil: response?.data?.foto_profil,
        tempat_lahir: response?.data?.tempat_lahir,
        tanggal_lahir: response?.data?.tanggal_lahir,
        jenis_kelamin: response?.data?.jenis_kelamin,
        no_telepon: response?.data?.no_telepon,
        alamat: response?.data?.alamat,
        instagram: response?.data?.instagram,
        whatsapp: response?.data?.whatsapp,
      });
    });
  }, [dispatch]);

  const handleUpdateProfile = async (values: any): Promise<any> => {
    const request = await requestUpdateProfilUser(id_users ?? '', values);
    if (request) {
      navigate(`/profile`);
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Profile"
        menus={[
          {
            label: 'Profile',
            link: `/profile/${id_users}`,
            icon: 'mdi:user',
          },
        ]}
      />

      <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-xl p-5 mb-5 mt-10 bg-white dark:bg-black">
        <h5 className="font-semibold text-lg dark:text-white-dark mb-10 mt-5 px-5">Update Profile Admin</h5>
        <div className="flex flex-col sm:flex-row">
          <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
            {imagePreview ? (
              <img src={imagePreview} alt="Iamge Preview" className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover mx-auto" />
            ) : (
              <img src={`${import.meta.env.VITE_API_URL}/${user?.data?.foto_profil}`} alt="img" className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover mx-auto" />
            )}
          </div>

          <div className="flex-1">
            <Formik
              enableReinitialize={true}
              initialValues={{
                nama: data.nama,
                foto_profil: data.foto_profil,
                tempat_lahir: data.tempat_lahir,
                tanggal_lahir: data.tanggal_lahir,
                jenis_kelamin: data.jenis_kelamin,
                no_telepon: data.no_telepon,
                alamat: data.alamat,
                instagram: data.instagram,
                whatsapp: data.whatsapp,
              }}
              validationSchema={validationSchema}
              onSubmit={handleUpdateProfile}
            >
              {({ errors, handleChange, submitCount, setFieldValue, values }) => (
                <Form>
                  <div className={submitCount ? (errors.nama ? 'has-error' : 'has-success') : ''}>
                    <InputText
                      id={'nama'}
                      name={'nama'}
                      label={'Nama Lengkap'}
                      value={values.nama || ''}
                      onChange={handleChange}
                      error={typeof errors.nama === 'string' ? errors.nama : ''}
                      placeholder={'Masukkan Nama Lengkap Anda...'}
                      isInputFilled={'Form Nama Lengkap Sudah Terisi'}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={submitCount ? (errors.tempat_lahir ? 'has-error' : 'has-success') : ''}>
                      <InputText
                        id={'tempat_lahir'}
                        name={'tempat_lahir'}
                        label={'Tempat Lahir'}
                        value={values.tempat_lahir || ''}
                        onChange={handleChange}
                        error={typeof errors.tempat_lahir === 'string' ? errors.tempat_lahir : ''}
                        placeholder={'Masukkan Tempat Lahir Anda...'}
                        isInputFilled={'Form Tempat Lahir Sudah Terisi'}
                      />
                    </div>
                    <div className={submitCount ? (errors.tanggal_lahir ? 'has-error' : 'has-success') : ''}>
                      <DateDefault
                        id={'tanggal_lahir'}
                        name={'tanggal_lahir'}
                        label={'Tanggal Lahir'}
                        value={TrimValue(values.tanggal_lahir)}
                        onChange={(date) => {
                          setFieldValue('tanggal_lahir', date[0]);
                        }}
                        error={typeof errors.tanggal_lahir === 'string' ? errors.tanggal_lahir : ''}
                        placeholder={'Masukkan Tanggal Lahir Anda...'}
                        isInputFilled={'Form Tanggal Lahir Sudah Terisi'}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={submitCount ? (errors.no_telepon ? 'has-error' : 'has-success') : ''}>
                      <InputNumber
                        id={'no_telepon'}
                        name={'no_telepon'}
                        label={'No Telepon (cth: 8123456789)'}
                        value={values.no_telepon}
                        onChange={handleChange}
                        error={typeof errors.no_telepon === 'string' ? errors.no_telepon : ''}
                        placeholder={'Masukkan No Telepon Anda...'}
                        isInputFilled={'Form No Telepon Sudah Terisi'}
                      />
                    </div>

                    <div className={submitCount ? (errors.jenis_kelamin ? 'has-error' : 'has-success') : ''}>
                      <JenisKelaminSelect
                        id={'jenis_kelamin'}
                        name={'jenis_kelamin'}
                        label={'Jenis Kelamin'}
                        error={typeof errors.jenis_kelamin === 'string' ? errors.jenis_kelamin : ''}
                        value={values.jenis_kelamin}
                        onChange={(value: any) => {
                          setFieldValue('jenis_kelamin', value.value);
                        }}
                        isInputFilled={'Form Jenis Kelamin Sudah Terisi'}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={submitCount ? (errors.instagram ? 'has-error' : 'has-success') : ''}>
                      <InputText
                        id={'instagram'}
                        name={'instagram'}
                        label={'Instagram'}
                        value={values.instagram || ''}
                        onChange={handleChange}
                        error={typeof errors.instagram === 'string' ? errors.instagram : ''}
                        placeholder={'Masukkan Instagram Anda...'}
                        isInputFilled={'Form Instagram Sudah Terisi'}
                      />
                    </div>
                    <div className={submitCount ? (errors.whatsapp ? 'has-error' : 'has-success') : ''}>
                      <InputNumber
                        id={'whatsapp'}
                        name={'whatsapp'}
                        label={'Whatsapp (cth: 8123456789)'}
                        value={values.whatsapp}
                        onChange={handleChange}
                        error={typeof errors.whatsapp === 'string' ? errors.whatsapp : ''}
                        placeholder={'Masukkan Whatsapp Anda...'}
                        isInputFilled={'Form Whatsapp Sudah Terisi'}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className={submitCount ? (errors.alamat ? 'has-error' : 'has-success') : ''}>
                      <InputText
                        id={'alamat'}
                        name={'alamat'}
                        label={'Alamat'}
                        value={values.alamat || ''}
                        onChange={handleChange}
                        error={typeof errors.alamat === 'string' ? errors.alamat : ''}
                        placeholder={'Masukkan Alamat Anda...'}
                        isInputFilled={'Form Alamat Sudah Terisi'}
                      />
                    </div>

                    <div className={submitCount ? (errors.foto_profil ? 'has-error' : 'has-success') : ''}>
                      <InputFile
                        id={'foto_profil'}
                        name={'foto_profil'}
                        label={'Foto Profil'}
                        value={values.foto_profil || ''}
                        error={typeof errors.foto_profil === 'string' ? errors.foto_profil : ''}
                        onChange={(e: any) => {
                          setFieldValue('foto_profil', e.target.files[0]);
                          setImagePreview(URL.createObjectURL(e.target.files[0]));
                        }}
                        isInputFilled={'Foto Sudah Terisi'}
                      />
                    </div>
                  </div>

                  <div className="md:flex justify-end mx-5 gap-3">
                    <ButtonSolidPrimary text={'Update Profil'} width={'md:w-auto w-full'} onClick={() => handleUpdateProfile(values)} />
                    <Link to={'/profile'}>
                      <ButtonSolidDanger text={'Batal'} width={'md:w-auto w-full'} />
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
