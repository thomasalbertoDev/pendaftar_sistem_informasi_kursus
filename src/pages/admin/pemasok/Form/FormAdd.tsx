import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestPostPemasok } from '../api/services/requestPostPemasok';
import { Form, Link, useNavigate } from 'react-router-dom';
import InputText from '../../../../components/forms/Input/InputText';
import ButtonSolidDanger from '../../../../components/buttons/solid/ButtonSolidDanger';
import BreadcrumbsDefault from '../../../../components/breadcrumbs/BreadcrumbsDefault';
import ButtonSolidPrimary from '../../../../components/buttons/solid/ButtonSolidPrimary';

const FormAdd = () => {
  const navigate = useNavigate();
  const handleCreate = async (e: { nama_pemasok: string; nama_kontak_pemasok: string; no_telp_pemasok: string; alamat_pemasok: string }): Promise<any> => {
    const { nama_pemasok, nama_kontak_pemasok, no_telp_pemasok, alamat_pemasok } = e;
    const request = await requestPostPemasok(nama_pemasok, nama_kontak_pemasok, no_telp_pemasok, alamat_pemasok);

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
            label: 'Tambah Pemasok',
            link: '/pemasok/tambah-pemasok',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            nama_pemasok: '',
            nama_kontak_pemasok: '',
            no_telp_pemasok: '',
            alamat_pemasok: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
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
                <ButtonSolidPrimary text={'Tambah Pemasok'} width={'w-auto'} onClick={() => handleCreate(values)} />
                <Link to={'/karyawan'}>
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

export default FormAdd;
