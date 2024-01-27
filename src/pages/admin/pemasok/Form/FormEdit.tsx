import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestPutPemasok } from '../api/services/requestPutPemasok';
import { useEffect, useState } from 'react';
import { requestGetPemasokByID } from '../api/services/requestGetPemasokByID';
import { Form, Link, useNavigate, useParams } from 'react-router-dom';
import InputText from '../../../../components/forms/Input/InputText';
import ButtonSolidDanger from '../../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidSuccess from '../../../../components/buttons/solid/ButtonSolidSuccess';
import BreadcrumbsDefault from '../../../../components/breadcrumbs/BreadcrumbsDefault';

const FormEdit = () => {
  const navigate = useNavigate();
  const { id_pemasok } = useParams();
  const [formData, setFormData] = useState({
    nama_pemasok: '',
    nama_kontak_pemasok: '',
    no_telp_pemasok: '',
    alamat_pemasok: '',
  });

  useEffect(() => {
    requestGetPemasokByID(id_pemasok ?? '').then((response) => {
      setFormData({
        nama_pemasok: response?.data?.nama_pemasok || '',
        nama_kontak_pemasok: response?.data?.nama_kontak_pemasok || '',
        no_telp_pemasok: response?.data?.no_telp_pemasok || '',
        alamat_pemasok: response?.data?.alamat_pemasok || '',
      });
    });
  });

  const handleUpdate = async (values: any) => {
    const request = await requestPutPemasok(id_pemasok ?? '', { ...values });
    if (request) {
      navigate('/pemasok');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Pemasok"
        menus={[
          {
            label: 'Pemasok',
            link: '/pemasok',
            icon: 'clarity:employee-solid',
          },
          {
            label: 'Edit Pemasok',
            link: `/pemasok/edit-pemasok/${id_pemasok}`,
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          enableReinitialize={true}
          initialValues={{
            nama_pemasok: formData.nama_pemasok,
            nama_kontak_pemasok: formData.nama_kontak_pemasok,
            no_telp_pemasok: formData.no_telp_pemasok,
            alamat_pemasok: formData.alamat_pemasok,
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
        >
          {({ errors, handleChange, submitCount, values }) => (
            <Form className="space-y-5">
              <div className={submitCount ? (errors.nama_pemasok ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'nama_pemasok'}
                  name={'nama_pemasok'}
                  label={'Nama Pemasok'}
                  value={values.nama_pemasok}
                  onChange={handleChange}
                  error={errors.nama_pemasok || ''}
                  placeholder={'Masukkan Nama Pemasok'}
                  isInputFilled={'Form Nama Pemasok Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.nama_kontak_pemasok ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'nama_kontak_pemasok'}
                  name={'nama_kontak_pemasok'}
                  label={'Nama Kontak Pemasok'}
                  value={values.nama_kontak_pemasok}
                  onChange={handleChange}
                  error={errors.nama_kontak_pemasok || ''}
                  placeholder={'Masukkan Nama Kontak Pemasok'}
                  isInputFilled={'Form Nama Kontak Pemasok Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.no_telp_pemasok ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'no_telp_pemasok'}
                  name={'no_telp_pemasok'}
                  label={'No Telp Pemasok (Cth: +628123456789)'}
                  value={values.no_telp_pemasok}
                  onChange={handleChange}
                  error={errors.no_telp_pemasok || ''}
                  placeholder={'Masukkan No Telp Pemasok'}
                  isInputFilled={'Form No Telp Pemasok Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.alamat_pemasok ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'alamat_pemasok'}
                  name={'alamat_pemasok'}
                  label={'Alamat Pemasok'}
                  value={values.alamat_pemasok}
                  onChange={handleChange}
                  error={errors.alamat_pemasok || ''}
                  placeholder={'Masukkan Alamat Pemasok'}
                  isInputFilled={'Form Alamat Pemasok Sudah Terisi'}
                />
              </div>

              <div className="flex gap-3 justify-end">
                <ButtonSolidSuccess text={'Edit Pemasok'} width={'w-auto'} onClick={() => handleUpdate(values)} />
                <Link to={'/pemasok'}>
                  <ButtonSolidDanger text={'Batal'} width={'w-auto'} />
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormEdit;
