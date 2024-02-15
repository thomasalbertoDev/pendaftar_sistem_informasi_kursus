import React from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { Link, useNavigate } from 'react-router-dom';
import { requestCreatePendidikan } from '../../../api/pendidikan/services/requestCreatePendidikan';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidPrimary from '../../../components/buttons/solid/ButtonSolidPrimary';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

const FormCreate: React.FC = () => {
  const navigate = useNavigate();
  const handleCreate = async (e: { nama_pendidikan: string }) => {
    const { nama_pendidikan } = e;
    const request = await requestCreatePendidikan(nama_pendidikan);
    if (request === true) {
      navigate('/pendidikan');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Pendidikan"
        menus={[
          {
            label: 'Pendidikan',
            link: '/pendidikan',
            icon: 'bxs:graduation',
          },
          {
            label: 'Tambah Pendidikan',
            link: '/pendidikan/tambah-pendidikan',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            nama_pendidikan: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} />

              <div className="flex gap-3 justify-end">
                <ButtonSolidPrimary text={'Tambah Pendidikan'} width={'w-auto'} onClick={() => handleCreate(values)} />
                <Link to={'/pendidikan'}>
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
