import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestPostKaryawan } from '../api/services/requestPostKaryawan';
import { Form, Link, useNavigate } from 'react-router-dom';
import InputText from '../../../../components/forms/Input/InputText';
import TrimValue from '../../../../helpers/TrimValue';
import InputFile from '../../../../components/forms/Input/InputFile';
import AgamaSelect from '../../../../utils/AgamaSelect';
import DateDefault from '../../../../components/forms/date/DateDefault';
import PreviewImage from '../../../../utils/PreviewImage';
import ButtonSolidDanger from '../../../../components/buttons/solid/ButtonSolidDanger';
import BreadcrumbsDefault from '../../../../components/breadcrumbs/BreadcrumbsDefault';
import ButtonSolidPrimary from '../../../../components/buttons/solid/ButtonSolidPrimary';
import JenisKelaminSelect from '../../../../utils/JenisKelaminSelect';

const FormAdd = () => {
  const navigate = useNavigate();
  const handleCreate = async (e: {
    nama_karyawan: string;
    jenis_kelamin: string;
    tempat_lahir: string;
    tanggal_lahir: string;
    tanggal_masuk: string;
    id_agama: string;
    alamat: string;
    no_telp: string;
    foto_karyawan: string;
  }): Promise<any> => {
    const { nama_karyawan, jenis_kelamin, tempat_lahir, tanggal_lahir, tanggal_masuk, id_agama, no_telp, alamat, foto_karyawan } = e;
    const request = await requestPostKaryawan(nama_karyawan, jenis_kelamin, tempat_lahir, tanggal_lahir, tanggal_masuk, id_agama, alamat, no_telp, foto_karyawan);

    if (request) {
      navigate('/karyawan');
    }

    console.log(request);
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Karyawan"
        menus={[
          {
            label: 'Karyawan',
            link: '/karyawan',
            icon: 'clarity:employee-solid',
          },
          {
            label: 'Tambah Karyawan',
            link: '/karyawan/tambah-karyawan',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            nama_karyawan: '',
            jenis_kelamin: '',
            tempat_lahir: '',
            tanggal_lahir: '',
            tanggal_masuk: '',
            id_agama: '',
            alamat: '',
            no_telp: '',
            foto_karyawan: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values, setFieldValue }) => (
            <Form className="space-y-5">
              <div className={submitCount ? (errors.nama_karyawan ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'nama_karyawan'}
                  name={'nama_karyawan'}
                  label={'Nama Karwayan'}
                  value={values.nama_karyawan}
                  onChange={handleChange}
                  error={errors.nama_karyawan || ''}
                  placeholder={'Masukkan Nama Karyawan'}
                  isInputFilled={'Form Nama Karyawan Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.jenis_kelamin ? 'has-error' : 'has-success') : ''}>
                <JenisKelaminSelect
                  id={'jenis_kelamin'}
                  name={'jenis_kelamin'}
                  label={'Jenis Kelamin'}
                  error={errors.jenis_kelamin || ''}
                  value={values.jenis_kelamin}
                  onChange={(value: any) => {
                    setFieldValue('jenis_kelamin', value.value);
                  }}
                  isInputFilled={'Form Jenis Kelamin Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.tempat_lahir ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'tempat_lahir'}
                  name={'tempat_lahir'}
                  label={'Tempat Lahir'}
                  value={values.tempat_lahir}
                  onChange={handleChange}
                  error={errors.tempat_lahir || ''}
                  placeholder={'Masukkan Tempat Lahir'}
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
                  error={errors.tanggal_lahir || ''}
                  placeholder={'Masukkan Tanggal Lahir'}
                  isInputFilled={'Form Tanggal Lahir Sudah Terisi'}
                />
              </div>
              <div className={submitCount ? (errors.tanggal_masuk ? 'has-error' : 'has-success') : ''}>
                <DateDefault
                  id={'tanggal_masuk'}
                  name={'tanggal_masuk'}
                  label={'Tanggal Masuk'}
                  value={TrimValue(values.tanggal_masuk)}
                  onChange={(date) => {
                    setFieldValue('tanggal_masuk', date[0]);
                  }}
                  error={errors.tanggal_lahir || ''}
                  placeholder={'Masukkan Tanggal Masuk'}
                  isInputFilled={'Form Tanggal Masuk Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.id_agama ? 'has-error' : 'has-success') : ''}>
                <AgamaSelect
                  id={'id_agama'}
                  name={'id_agama'}
                  label={'Agama'}
                  value={values.id_agama}
                  error={errors.id_agama || ''}
                  onChange={(e: any) => {
                    setFieldValue('id_agama', (values.id_agama = e.value));
                  }}
                  placeholder={'Pilih Agama'}
                  isInputFilled={'Form Agama Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.alamat ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'alamat'}
                  name={'alamat'}
                  label={'Alamat Karyawan'}
                  value={values.alamat}
                  onChange={handleChange}
                  error={errors.alamat || ''}
                  placeholder={'Masukkan Alamat Karyawan'}
                  isInputFilled={'Form Alamat Karyawan Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.no_telp ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'no_telp'}
                  name={'no_telp'}
                  label={'No Telepon (Cth: +6281234567890)'}
                  value={values.no_telp}
                  onChange={handleChange}
                  error={errors.no_telp || ''}
                  placeholder={'Masukkan No Telepon Karyawan'}
                  isInputFilled={'Form No Telepon Karyawan Sudah Terisi'}
                />
              </div>

              <div className={submitCount ? (errors.foto_karyawan ? 'has-error' : 'has-success') : ''}>
                <InputFile
                  id={'foto_karyawan'}
                  name={'foto_karyawan'}
                  label={'Foto Karyawan'}
                  value={values.foto_karyawan}
                  onChange={(e: any) => {
                    setFieldValue('foto_karyawan', e.target.files[0]);
                  }}
                  error={errors.foto_karyawan || ''}
                  isInputFilled={'Form Foto Siswa Sudah Terisi'}
                />

                {values.foto_karyawan && <PreviewImage image={values.foto_karyawan} />}
              </div>

              <div className="flex gap-3 justify-end">
                <ButtonSolidPrimary text={'Tambah Karyawan'} width={'w-auto'} onClick={() => handleCreate(values)} />
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
