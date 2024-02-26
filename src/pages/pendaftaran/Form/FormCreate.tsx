import React from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { Link, useNavigate } from 'react-router-dom';
import { requestCreatePendaftaran } from '../../../api/pendaftaran/service/requestCreatePendaftaran';
import FormLayouts from './layouts/FormLayout';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import ButtonSolidPrimary from '../../../components/buttons/solid/ButtonSolidPrimary';

interface Pendaftaran {
  kursus_ID: string;
  nisn: number;
  nis: number;
  nik: number;
  nama_lengkap: string;
  jenis_kelamin: string;
  pas_foto: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  agama_ID: string;
  email: string;
  no_telepon: string;
  alamat: string;
  nama_ayah: string;
  pekerjaan_ayah_ID: string;
  no_telepon_ayah: string;
  pendidikan_ayah_ID: string;
  penghasilan_ayah_ID: string;
  nama_ibu: string;
  pekerjaan_ibu_ID: string;
  no_telepon_ibu: string;
  pendidikan_ibu_ID: string;
  penghasilan_ibu_ID: string;
  slip_gaji_ayah_ibu: string;
  foto_kk: string;
  sekolah_ID: string;
  nilai_semester_1: number;
  nilai_semester_2: number;
  nilai_semester_3: number;
  nilai_semester_4: number;
  nilai_semester_5?: number;
  nilai_semester_6?: number;
  raport: string;
  prestasi?: string;
}

const FormCreate: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const handleCreate = async (formData: Pendaftaran) => {
    const request = await requestCreatePendaftaran(formData);
    if (request === true) {
      navigate('/pendaftaran');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Ajukan Pendaftaran"
        menus={[
          {
            label: 'Pendaftaran',
            link: '/pendaftaran',
            icon: 'mdi:register',
          },
          {
            label: 'Ajukan Pendaftaran',
            link: `/pendaftaran/ajukan-pendaftaran`,
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
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
            prestasi: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values, setFieldValue }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} setFieldValue={setFieldValue} />

              <div className="flex gap-3 justify-end">
                <ButtonSolidPrimary text={'Ajukan Pendaftaran'} width={'w-auto'} onClick={() => handleCreate(values)} />
                <Link to={'/pendaftarn'}>
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

export default FormCreate;
