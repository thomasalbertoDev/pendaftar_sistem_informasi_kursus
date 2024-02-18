import React from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { Link, useNavigate } from 'react-router-dom';
import { requestCreateKursus } from '../../../api/kursus/services/requestCreateKursus';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import ButtonSolidPrimary from '../../../components/buttons/solid/ButtonSolidPrimary';

interface Kursus {
  nama_kursus: String;
  topik_kursus: String;
  jenjang_kursus: String;
  pengajar_ID: String;
  jam_mulai: String;
  jam_selesai: String;
  tanggal_mulai: String;
  tanggal_selesai: String;
  hari_kursus: String;
  harga_kursus: Number;
  foto_kursus: String;
  syarat_kursus: String;
  deskripsi_kursus: String;
  modul_kursus: String;
}

const FormCreate: React.FC = () => {
  const navigate = useNavigate();
  const handleCreate = async (formData: Kursus) => {
    const request = await requestCreateKursus(formData);
    if (request === true) {
      navigate('/kursus');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Tambah Kursus"
        menus={[
          {
            label: 'Kursus',
            link: '/kursus',
            icon: 'dashicons:welcome-learn-more',
          },
          {
            label: 'Tambah Kursus',
            link: '/kursus/tambah-kursus',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            nama_kursus: '',
            topik_kursus: '',
            jenjang_kursus: '',
            pengajar_ID: '',
            jam_mulai: '',
            jam_selesai: '',
            tanggal_mulai: '',
            tanggal_selesai: '',
            hari_kursus: '',
            harga_kursus: 0,
            syarat_kursus: '',
            modul_kursus: '',
            foto_kursus: '',
            deskripsi_kursus: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values, setFieldValue }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} setFieldValue={setFieldValue} />

              <div className="flex gap-3 justify-end">
                <ButtonSolidPrimary text={'Tambah Kursus'} width={'w-auto'} onClick={() => handleCreate(values)} />
                <Link to={'/kursus'}>
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
