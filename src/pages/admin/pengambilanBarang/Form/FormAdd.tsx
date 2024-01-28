import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { Form, Link, useNavigate } from 'react-router-dom';
import { requestPostPengambilanBarang } from '../api/services/requestPostPengambilanBarang';
import TrimValue from '../../../../helpers/TrimValue';
import DateDefault from '../../../../components/forms/date/DateDefault';
import InputNumber from '../../../../components/forms/Input/InputNumber';
import BarangSelect from '../../../../utils/BarangSelect';
import KaryawanSelect from '../../../../utils/KaryawanSelect';
import ButtonSolidDanger from '../../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidPrimary from '../../../../components/buttons/solid/ButtonSolidPrimary';
import BreadcrumbsDefault from '../../../../components/breadcrumbs/BreadcrumbsDefault';

const FormAdd = () => {
  const navigate = useNavigate();
  const handleCreate = async (e: { tanggal_pengambilan_barang: string; id_barang: string; id_karyawan: string; jumlah_pengambilan_barang: number }): Promise<any> => {
    const { tanggal_pengambilan_barang, id_barang, id_karyawan, jumlah_pengambilan_barang } = e;
    const request = await requestPostPengambilanBarang(tanggal_pengambilan_barang, id_barang, id_karyawan, jumlah_pengambilan_barang);

    if (request) {
      navigate('/pengambilan-barang');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Pengambilan Barang"
        menus={[
          {
            label: 'Pengambilan Barang',
            link: '/pengambilan-barang',
            icon: 'lets-icons:box-open-fill',
          },
          {
            label: 'Tambah Pengambilan Barang',
            link: '/karyawan/tambah-karyawan',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            tanggal_pengambilan_barang: '',
            id_barang: '',
            id_karyawan: '',
            jumlah_pengambilan_barang: 0,
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values, setFieldValue }) => (
            <Form className="space-y-5">
              <div className={submitCount ? (errors.tanggal_pengambilan_barang ? 'has-error' : 'has-success') : ''}>
                <DateDefault
                  id={'tanggal_pengambilan_barang'}
                  name={'tanggal_pengambilan_barang'}
                  label={'Tanggal Pengambilan Barang'}
                  value={TrimValue(values.tanggal_pengambilan_barang)}
                  onChange={(date) => {
                    setFieldValue('tanggal_pengambilan_barang', date[0]);
                  }}
                  error={errors.tanggal_pengambilan_barang || ''}
                  placeholder={'Masukkan Tanggal Pengambilan Barang'}
                  isInputFilled={'Form Tanggal Pengambilan Barang Sudah Terisi'}
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

              <div className={submitCount ? (errors.id_karyawan ? 'has-error' : 'has-success') : ''}>
                <KaryawanSelect
                  id={'id_karyawan'}
                  name={'id_karyawan'}
                  label={'Karyawan'}
                  error={errors.id_karyawan || ''}
                  value={values.id_karyawan}
                  onChange={(value: any) => {
                    setFieldValue('id_karyawan', value.value);
                  }}
                  placeholder={'-- Pilih Karyawan --'}
                  isInputFilled={'Form Karyawan Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.jumlah_pengambilan_barang ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'jumlah_pengambilan_barang'}
                  name={'jumlah_pengambilan_barang'}
                  label={'Jumlah Pengambilan Barang'}
                  value={values.jumlah_pengambilan_barang}
                  onChange={handleChange}
                  error={errors.jumlah_pengambilan_barang || ''}
                  placeholder={'Masukkan Jumlah Pengambilan Barang'}
                  isInputFilled={'Form Jumlah Pengambilan Barang Sudah Terisi'}
                />
              </div>

              <div className="flex gap-3 justify-end">
                <ButtonSolidPrimary text={'Tambah Pengambilan Barang'} width={'w-auto'} onClick={() => handleCreate(values)} />
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
