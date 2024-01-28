import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestPostBarang } from '../api/services/requestPostBarang';
import { Form, Link, useNavigate } from 'react-router-dom';
import InputText from '../../../../components/forms/Input/InputText';
import InputFile from '../../../../components/forms/Input/InputFile';
import InputNumber from '../../../../components/forms/Input/InputNumber';
import PreviewImage from '../../../../utils/PreviewImage';
import PemasokSelect from '../../../../utils/PemasokSelect';
import ButtonSolidDanger from '../../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidPrimary from '../../../../components/buttons/solid/ButtonSolidPrimary';
import SatuanBarangSelect from '../../../../utils/SatuanBarangSelect';
import BreadcrumbsDefault from '../../../../components/breadcrumbs/BreadcrumbsDefault';
import KategoriBarangSelect from '../../../../utils/KategoriBarangSelect';

const FormAdd = () => {
  const navigate = useNavigate();
  const handleCreate = async (e: {
    kode_barang: string;
    nama_barang: string;
    id_kategori_barang: string;
    stok_barang: number;
    id_satuan_barang: string;
    lokasi_barang: string;
    id_pemasok: string;
    keterangan_barang: string;
    foto_barang: string;
  }): Promise<any> => {
    const { kode_barang, nama_barang, id_kategori_barang, stok_barang, id_satuan_barang, lokasi_barang, id_pemasok, keterangan_barang, foto_barang } = e;
    const request = await requestPostBarang(kode_barang, nama_barang, id_kategori_barang, stok_barang, id_satuan_barang, lokasi_barang, id_pemasok, keterangan_barang, foto_barang);

    if (request) {
      navigate('/barang');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Barang"
        menus={[
          {
            label: 'Barang',
            link: '/barang',
            icon: 'solar:box-bold',
          },
          {
            label: 'Tambah Barang',
            link: '/barang/tambah-barang',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            kode_barang: '',
            nama_barang: '',
            id_kategori_barang: '',
            stok_barang: 0,
            id_satuan_barang: '',
            lokasi_barang: '',
            id_pemasok: '',
            keterangan_barang: '',
            foto_barang: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values, setFieldValue }) => (
            <Form className="space-y-5">
              <div className={submitCount ? (errors.kode_barang ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'kode_barang'}
                  name={'kode_barang'}
                  label={'Kode Barang'}
                  value={values.kode_barang}
                  onChange={handleChange}
                  error={errors.kode_barang || ''}
                  placeholder={'Masukkan Kode Barang'}
                  isInputFilled={'Form Kode Barang Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.nama_barang ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'nama_barang'}
                  name={'nama_barang'}
                  label={'Nama Barang'}
                  value={values.nama_barang}
                  onChange={handleChange}
                  error={errors.nama_barang || ''}
                  placeholder={'Masukkan Nama Barang'}
                  isInputFilled={'Form Nama Barang Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.id_kategori_barang ? 'has-error' : 'has-success') : ''}>
                <KategoriBarangSelect
                  id={'id_kategori_barang'}
                  name={'id_kategori_barang'}
                  label={'Kategori Barang'}
                  value={values.id_kategori_barang}
                  onChange={(value: any) => {
                    setFieldValue('id_kategori_barang', value.value);
                  }}
                  error={errors.id_kategori_barang || ''}
                  placeholder={'--Pilih Kategori Barang--'}
                  isInputFilled={'Form Kategori Barang Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.stok_barang ? 'has-error' : 'has-success') : ''}>
                <InputNumber
                  id={'stok_barang'}
                  name={'stok_barang'}
                  label={'Stok Barang'}
                  value={values.stok_barang}
                  onChange={handleChange}
                  error={errors.stok_barang || ''}
                  placeholder={'Masukkan Stok Barang'}
                  isInputFilled={'Form Stok Barang Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.id_satuan_barang ? 'has-error' : 'has-success') : ''}>
                <SatuanBarangSelect
                  id={'id_satuan_barang'}
                  name={'id_satuan_barang'}
                  label={'Satuan Barang'}
                  value={values.id_satuan_barang}
                  onChange={(value: any) => {
                    setFieldValue('id_satuan_barang', value.value);
                  }}
                  error={errors.id_satuan_barang || ''}
                  placeholder={'--Pilih Satuan Barang--'}
                  isInputFilled={'Form Satuan Barang Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.lokasi_barang ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'lokasi_barang'}
                  name={'lokasi_barang'}
                  label={'Lokasi Barang'}
                  value={values.lokasi_barang}
                  onChange={handleChange}
                  error={errors.lokasi_barang || ''}
                  placeholder={'Masukkan Lokasi Barang'}
                  isInputFilled={'Form Lokasi Barang Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.id_pemasok ? 'has-error' : 'has-success') : ''}>
                <PemasokSelect
                  id={'id_pemasok'}
                  name={'id_pemasok'}
                  label={'Pemasok Barang'}
                  value={values.id_pemasok}
                  onChange={(value: any) => {
                    setFieldValue('id_pemasok', value.value);
                  }}
                  error={errors.id_pemasok || ''}
                  placeholder={'--Pilih Pemasok Barang--'}
                  isInputFilled={'Form Pemasok Barang Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.keterangan_barang ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'keterangan_barang'}
                  name={'keterangan_barang'}
                  label={'Keterangan Barang'}
                  value={values.keterangan_barang}
                  onChange={handleChange}
                  error={errors.keterangan_barang || ''}
                  placeholder={'Masukkan Keterangan Barang'}
                  isInputFilled={'Form Keterangan Barang Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.foto_barang ? 'has-error' : 'has-success') : ''}>
                <InputFile
                  id={'foto_barang'}
                  name={'foto_barang'}
                  label={'Foto Barang'}
                  value={values.foto_barang}
                  onChange={(e: any) => {
                    setFieldValue('foto_barang', e.target.files[0]);
                  }}
                  error={errors.foto_barang || ''}
                  isInputFilled={'Form Foto Barang Sudah Terisi'}
                />

                {values.foto_barang && <PreviewImage image={values.foto_barang} />}
              </div>

              <div className="flex gap-3 justify-end">
                <ButtonSolidPrimary text={'Tambah Barang'} width={'w-auto'} onClick={() => handleCreate(values)} />
                <Link to={'/barang'}>
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
