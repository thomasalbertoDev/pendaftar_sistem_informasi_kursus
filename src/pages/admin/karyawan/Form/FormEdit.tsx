import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestPutKaryawan } from '../api/services/requestPutKaryawan';
import { useEffect, useState } from 'react';
import { requestGetKaryawanByID } from '../api/services/requestGetKaryawanByID';
import { Form, Link, useNavigate, useParams } from 'react-router-dom';
import InputText from '../../../../components/forms/Input/InputText';
import TrimValue from '../../../../helpers/TrimValue';
import InputFile from '../../../../components/forms/Input/InputFile';
import DateDefault from '../../../../components/forms/date/DateDefault';
import AgamaSelect from '../../../../utils/AgamaSelect';
import PreviewImage from '../../../../utils/PreviewImage';
import ButtonSolidDanger from '../../../../components/buttons/solid/ButtonSolidDanger';
import JenisKelaminSelect from '../../../../utils/JenisKelaminSelect';
import ButtonSolidSuccess from '../../../../components/buttons/solid/ButtonSolidSuccess';
import BreadcrumbsDefault from '../../../../components/breadcrumbs/BreadcrumbsDefault';

const FormEdit = () => {
  const navigate = useNavigate();
  const { id_karyawan } = useParams();
  const [formData, setFormData] = useState({
    nama_karyawan: '',
    jenis_kelamin: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    tanggal_masuk: '',
    id_agama: '',
    alamat: '',
    no_telp: '',
    foto_karyawan: '',
  });

  useEffect(() => {
    requestGetKaryawanByID(id_karyawan ?? '').then((response) => {
      setFormData({
        nama_karyawan: response?.data?.nama_karyawan || '',
        jenis_kelamin: response?.data?.jenis_kelamin || '',
        tempat_lahir: response?.data?.tempat_lahir || '',
        tanggal_lahir: response?.data?.tanggal_lahir || '',
        tanggal_masuk: response?.data?.tanggal_masuk || '',
        id_agama: response?.data?.agama?.id_agama || '',
        alamat: response?.data?.alamat || '',
        no_telp: response?.data?.no_telp || '',
        foto_karyawan: response?.data?.foto_karyawan || '',
      });
    });
  }, []);

  const handleUpdate = async (values: any) => {
    const request = await requestPutKaryawan(id_karyawan ?? '', { ...values });
    if (request) {
      navigate('/karyawan');
    }
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
            label: 'Edit Karwayan',
            link: `/karyawan/edit-karwayan/${id_karyawan}`,
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          enableReinitialize={true}
          initialValues={{
            nama_karyawan: formData.nama_karyawan,
            jenis_kelamin: formData.jenis_kelamin,
            tempat_lahir: formData.tempat_lahir,
            tanggal_lahir: formData.tanggal_lahir,
            tanggal_masuk: formData.tanggal_masuk,
            id_agama: formData.id_agama,
            alamat: formData.alamat,
            no_telp: formData.no_telp,
            foto_karyawan: formData.foto_karyawan,
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
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

                {values.foto_karyawan && (values.foto_karyawan as any) instanceof File ? (
                  <PreviewImage image={values.foto_karyawan} />
                ) : values.foto_karyawan ? (
                  <div className="custom-file-container__image-preview relative">
                    <img src={`${import.meta.env.VITE_API_URL}/${values.foto_karyawan}`} alt="Foto Karyawan" />
                  </div>
                ) : null}
              </div>

              <div className="flex gap-3 justify-end">
                <ButtonSolidSuccess text={'Edit Karyawan'} width={'w-auto'} onClick={() => handleUpdate(values)} />
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

export default FormEdit;
