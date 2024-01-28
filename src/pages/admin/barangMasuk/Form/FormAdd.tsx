import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestPostBarangMasuk } from '../api/services/requestPostBarangMasuk';
import { Form, Link, useNavigate } from 'react-router-dom';
import TrimValue from '../../../../helpers/TrimValue';
import InputNumber from '../../../../components/forms/Input/InputNumber';
import DateDefault from '../../../../components/forms/date/DateDefault';
import BarangSelect from '../../../../utils/BarangSelect';
import ButtonSolidDanger from '../../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidPrimary from '../../../../components/buttons/solid/ButtonSolidPrimary';
import BreadcrumbsDefault from '../../../../components/breadcrumbs/BreadcrumbsDefault';

const FormAdd = () => {
  const navigate = useNavigate();
  const handleCreate = async (e: { tanggal_barang_masuk: string; id_barang: string; jumlah_barang_masuk: number }): Promise<any> => {
    const { tanggal_barang_masuk, id_barang, jumlah_barang_masuk } = e;
    const request = await requestPostBarangMasuk(tanggal_barang_masuk, id_barang, jumlah_barang_masuk);

    if (request) {
      navigate('/barang-masuk');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Barang Masuk"
        menus={[
          {
            label: 'Barang Masuk',
            link: '/barang-masuk',
            icon: 'lets-icons:box-open-fill',
          },
          {
            label: 'Tambah Barang Masuk',
            link: '/barang-masuk/tambah-barang-masuk',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            tanggal_barang_masuk: '',
            id_barang: '',
            jumlah_barang_masuk: 0,
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values, setFieldValue }) => (
            <Form className="space-y-5">
              <div className={submitCount ? (errors.tanggal_barang_masuk ? 'has-error' : 'has-success') : ''}>
                <DateDefault
                  id={'tanggal_barang_masuk'}
                  name={'tanggal_barang_masuk'}
                  label={'Tanggal Barang Masuk'}
                  value={TrimValue(values.tanggal_barang_masuk)}
                  onChange={(date) => {
                    setFieldValue('tanggal_barang_masuk', date[0]);
                  }}
                  error={errors.tanggal_barang_masuk || ''}
                  placeholder={'Masukkan Tanggal Barang Masuk'}
                  isInputFilled={'Form Tanggal Barang Masuk Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.id_barang ? 'has-error' : 'has-success') : ''}>
                <BarangSelect
                  id={'id_barang'}
                  name={'id_barang'}
                  label={'Barang'}
                  error={errors.id_barang || ''}
                  value={values.id_barang}
                  onChange={(value: any) => {
                    setFieldValue('id_barang', value.value);
                  }}
                  placeholder={'-- Pilih Barang --'}
                  isInputFilled={'Form Barang Sudah Dipilih'}
                />
              </div>

              <div className={submitCount ? (errors.jumlah_barang_masuk ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'jumlah_barang_masuk'}
                  name={'jumlah_barang_masuk'}
                  label={'Jumlah Barang Masuk'}
                  value={values.jumlah_barang_masuk}
                  onChange={handleChange}
                  error={errors.jumlah_barang_masuk || ''}
                  placeholder={'Masukkan Jumlah Barang Masuk'}
                  isInputFilled={'Form Jumlah Barang Masuk Sudah Terisi'}
                />
              </div>

              <div className="flex gap-3 justify-end">
                <ButtonSolidPrimary text={'Tambah Barang Masuk'} width={'w-auto'} onClick={() => handleCreate(values)} />
                <Link to={'/pengambilan-barang'}>
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
