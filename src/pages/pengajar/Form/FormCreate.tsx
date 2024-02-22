import React from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { Link, useNavigate } from 'react-router-dom';
import { requestCreatePengajar } from '../../../api/pengajar/services/requestCreatePengajar';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import ButtonSolidPrimary from '../../../components/buttons/solid/ButtonSolidPrimary';

interface Pengajar {
  nama_pengajar: string;
  no_telepon_pengajar: string;
  gelar_pengajar: string;
  keahlian_pengajar: string;
  pengalaman_pengajar: string;
  foto_pengajar: string;
  sertifikat_pengajar: string;
}

const FormCreate: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const handleCreate = async (formData: Pengajar) => {
    const request = await requestCreatePengajar(formData);
    if (request === true) {
      navigate('/pengajar');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Tambah Pengajar"
        menus={[
          {
            label: 'Pengajar',
            link: '/pengajar',
            icon: 'mdi:teacher',
          },
          {
            label: 'Tambah Pengajar',
            link: '/pengajar/tambah-pengajar',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            nama_pengajar: '',
            no_telepon_pengajar: '',
            gelar_pengajar: '',
            keahlian_pengajar: '',
            pengalaman_pengajar: '',
            foto_pengajar: '',
            sertifikat_pengajar: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values, setFieldValue }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} setFieldValue={setFieldValue} />

              <div className="flex gap-3 justify-end">
                <ButtonSolidPrimary text={'Tambah Pengajar'} width={'w-auto'} onClick={() => handleCreate(values)} />
                <Link to={'/pengajar'}>
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
