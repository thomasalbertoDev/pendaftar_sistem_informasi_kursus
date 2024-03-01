import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestUpdatePendaftaran } from '../../../api/pendaftaran/service/requestUpdatePendaftaran';
import { requestGetPendaftaranByID } from '../../../api/pendaftaran/service/requestGetPendaftaranByID';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormLayouts from './layouts/FormLayout';
import AlertSolidDanger from '../../../components/alerts/solid/AlertSolidDanger';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import ButtonSolidSuccess from '../../../components/buttons/solid/ButtonSolidSuccess';

const FormUpdate: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { id_pendaftaran } = useParams<{ id_pendaftaran: string }>();
  const [formData, setFormData] = useState({
    kursus_ID: '',
    nisn: 0,
    nis: 0,
    nik: 0,
    nama_lengkap: '',
    jenis_kelamin: '',
    pas_foto: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    agama_ID: '',
    email: '',
    no_telepon: '',
    alamat: '',
    nama_ayah: '',
    pekerjaan_ayah_ID: '',
    no_telepon_ayah: '',
    pendidikan_ayah_ID: '',
    penghasilan_ayah_ID: '',
    nama_ibu: '',
    pekerjaan_ibu_ID: '',
    no_telepon_ibu: '',
    pendidikan_ibu_ID: '',
    penghasilan_ibu_ID: '',
    slip_gaji_ayah_ibu: '',
    foto_kk: '',
    sekolah_ID: '',
    nilai_semester_1: 0,
    nilai_semester_2: 0,
    nilai_semester_3: 0,
    nilai_semester_4: 0,
    nilai_semester_5: 0,
    nilai_semester_6: 0,
    raport: '',
  });

  useEffect(() => {
    requestGetPendaftaranByID(id_pendaftaran ?? '').then((response: any) => {
      setFormData({
        kursus_ID: response.data.kursus.id_kursus,
        nisn: response.data.nisn,
        nis: response.data.nis,
        nik: response.data.nik,
        nama_lengkap: response.data.nama_lengkap,
        jenis_kelamin: response.data.jenis_kelamin,
        pas_foto: response.data.pas_foto,
        tempat_lahir: response.data.tempat_lahir,
        tanggal_lahir: response.data.tanggal_lahir,
        agama_ID: response.data.agama.id_agama,
        email: response.data.email,
        no_telepon: response.data.no_telepon,
        alamat: response.data.alamat,
        nama_ayah: response.data.nama_ayah,
        pekerjaan_ayah_ID: response.data.pekerjaan_ayah.id_pekerjaan,
        no_telepon_ayah: response.data.no_telepon_ayah,
        pendidikan_ayah_ID: response.data.pendidikan_ayah.id_pendidikan,
        penghasilan_ayah_ID: response.data.penghasilan_ayah.id_penghasilan,
        nama_ibu: response.data.nama_ibu,
        pekerjaan_ibu_ID: response.data.pekerjaan_ibu.id_pekerjaan,
        no_telepon_ibu: response.data.no_telepon_ibu,
        pendidikan_ibu_ID: response.data.pendidikan_ibu.id_pendidikan,
        penghasilan_ibu_ID: response.data.penghasilan_ibu.id_penghasilan,
        slip_gaji_ayah_ibu: response.data.slip_gaji_ayah_ibu,
        foto_kk: response.data.foto_kk,
        sekolah_ID: response.data.sekolah.id_sekolah,
        nilai_semester_1: response.data.nilai_semester_1,
        nilai_semester_2: response.data.nilai_semester_2,
        nilai_semester_3: response.data.nilai_semester_3,
        nilai_semester_4: response.data.nilai_semester_4,
        nilai_semester_5: response.data.nilai_semester_5,
        nilai_semester_6: response.data.nilai_semester_6,
        raport: response.data.raport,
      });
    });
  }, [id_pendaftaran]);

  const handleUpdate = async (formData: any) => {
    const response = await requestUpdatePendaftaran(id_pendaftaran ?? '', formData);
    if (response === true) {
      navigate('/pendaftaran');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Update Data Pendaftaran"
        menus={[
          {
            label: 'Pendaftaran',
            link: '/pendaftaran',
            icon: 'mdi:register',
          },
          {
            label: 'Update Data Pendaftaran',
            link: `/pendaftaran/update-pendaftaran/${id_pendaftaran}`,
          },
        ]}
      />

      <div className="w-full my-5">
        <AlertSolidDanger title={'PERBAIKAN!'} text={'Data Anda Masih Ada Yang Salah , Silahkan Perbaiki Lagi!'} />
      </div>

      <div className="mt-10">
        <Formik
          enableReinitialize={true}
          initialValues={{
            kursus_ID: formData.kursus_ID,
            nisn: formData.nisn,
            nis: formData.nis,
            nik: formData.nik,
            nama_lengkap: formData.nama_lengkap,
            jenis_kelamin: formData.jenis_kelamin,
            pas_foto: formData.pas_foto,
            tempat_lahir: formData.tempat_lahir,
            tanggal_lahir: formData.tanggal_lahir,
            agama_ID: formData.agama_ID,
            email: formData.email,
            no_telepon: formData.no_telepon,
            alamat: formData.alamat,
            nama_ayah: formData.nama_ayah,
            pekerjaan_ayah_ID: formData.pekerjaan_ayah_ID,
            no_telepon_ayah: formData.no_telepon_ayah,
            pendidikan_ayah_ID: formData.pendidikan_ayah_ID,
            penghasilan_ayah_ID: formData.penghasilan_ayah_ID,
            nama_ibu: formData.nama_ibu,
            pekerjaan_ibu_ID: formData.pekerjaan_ibu_ID,
            no_telepon_ibu: formData.no_telepon_ibu,
            pendidikan_ibu_ID: formData.pendidikan_ibu_ID,
            penghasilan_ibu_ID: formData.penghasilan_ibu_ID,
            slip_gaji_ayah_ibu: formData.slip_gaji_ayah_ibu,
            foto_kk: formData.foto_kk,
            sekolah_ID: formData.sekolah_ID,
            nilai_semester_1: formData.nilai_semester_1,
            nilai_semester_2: formData.nilai_semester_2,
            nilai_semester_3: formData.nilai_semester_3,
            nilai_semester_4: formData.nilai_semester_4,
            nilai_semester_5: formData.nilai_semester_5,
            nilai_semester_6: formData.nilai_semester_6,
            raport: formData.raport,
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
        >
          {({ errors, handleChange, submitCount, values, setFieldValue }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} setFieldValue={setFieldValue} />

              <div className="flex gap-3 justify-end">
                <ButtonSolidSuccess text={'Update Data Pendaftaran'} width={'w-auto'} onClick={() => handleUpdate(values)} />
                <Link to={'/pendaftaran'}>
                  <ButtonSolidDanger text={'Batal'} width={'w-auto'} />
                </Link>
              </div>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormUpdate;
