import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { Form, useParams } from 'react-router-dom';
import { requestGetAdmin } from './api/services/requestGetAdmin';
import { requestPutAdmin } from './api/services/requestPutAdmin';
import { validationSchema } from './validationSchema';
import { useEffect, useState } from 'react';
import InputText from '../../../components/forms/Input/InputText';
import InputFile from '../../../components/forms/Input/InputFile';
import ButtonSolidPrimary from '../../../components/buttons/solid/ButtonSolidPrimary';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

const Index = () => {
  const dispatch = useDispatch();
  const { id_admin } = useParams();
  const [admin, setAdmin] = useState<any>({});
  const [namaAdmin, setNamaAdmin] = useState('');
  const [fotoAdmin, setFotoAdmin] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    dispatch(setPageTitle('Admin | Profile'));

    requestGetAdmin().then((adminData) => {
      setAdmin(adminData);
      setNamaAdmin(adminData.data?.nama_admin);
      setFotoAdmin(adminData.data?.foto_admin);
    });
  }, [dispatch]);

  const handleUpdateProfile = async (values: any): Promise<any> => {
    const request = await requestPutAdmin(id_admin ?? '', { ...values });
    return request;
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Profile"
        menus={[
          {
            label: 'Profile',
            link: `/profile/${id_admin}`,
            icon: 'mdi:user',
          },
        ]}
      />

      <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 mt-10 bg-white dark:bg-black">
        <h6 className="text-lg font-bold mb-5">Data Admin</h6>
        <div className="flex flex-col sm:flex-row">
          <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto" />
            ) : (
              <img src={`${import.meta.env.VITE_API_URL}/${admin?.data?.foto_admin}`} alt="img" className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto" />
            )}
          </div>
          <div className="flex-1 ">
            <Formik
              enableReinitialize={true}
              initialValues={{
                nama_admin: namaAdmin,
                foto_admin: fotoAdmin,
              }}
              validationSchema={validationSchema}
              onSubmit={handleUpdateProfile}
            >
              {({ errors, handleChange, submitCount, setFieldValue, values }) => (
                <Form className="">
                  <div className={submitCount ? (errors.nama_admin ? 'has-error' : 'has-success') : ''}>
                    <InputText
                      id={'nama_admin'}
                      name={'nama_admin'}
                      label={'Nama Admin'}
                      value={values.nama_admin || ''}
                      onChange={handleChange}
                      error={errors.nama_admin || ''}
                      placeholder={'Masukkan Nama Admin'}
                      isInputFilled={'Form Nama Admin Sudah Terisi'}
                    />
                  </div>

                  <div className={submitCount ? (errors.foto_admin ? 'has-error' : 'has-success') : ''}>
                    <InputFile
                      id={'foto_admin'}
                      name={'foto_admin'}
                      label={'Foto Profil'}
                      value={values.foto_admin || ''}
                      error={typeof errors.foto_admin === 'string' ? errors.foto_admin : ''}
                      onChange={(e: any) => {
                        setFieldValue('foto_admin', e.target.files[0]);
                        setImagePreview(URL.createObjectURL(e.target.files[0]));
                      }}
                      isInputFilled={'Foto Sudah Terisi'}
                    />
                  </div>
                  <div className="flex justify-end">
                    <ButtonSolidPrimary text={'Update Profil Admin'} width="w-auto" onClick={() => handleUpdateProfile(values)} />
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

export default Index;
