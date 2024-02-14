import React from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { Link, useNavigate } from 'react-router-dom';
import { requestCreateAgama } from '../../../api/agama/services/requestCreateAgama';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import ButtonSolidPrimary from '../../../components/buttons/solid/ButtonSolidPrimary';

const FormCreate: React.FC = () => {
  const navigate = useNavigate();
  const handleCreate = async (e: { nama_agama: string }) => {
    const { nama_agama } = e;
    const request = await requestCreateAgama(nama_agama);
    if (request === true) {
      navigate('/agama');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Agama"
        menus={[
          {
            label: 'Agama',
            link: '/agama',
            icon: 'mdi:religion-christian',
          },
          {
            label: 'Tambah Agama',
            link: '/agama/tambah-agama',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            nama_agama: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} />

              <div className="flex gap-3 justify-end">
                <ButtonSolidPrimary text={'Tambah Agama'} width={'w-auto'} onClick={() => handleCreate(values)} />
                <Link to={'/agama'}>
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
