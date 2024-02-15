import React from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { Link, useNavigate } from 'react-router-dom';
import { requestCreatePenghasilan } from '../../../api/penghasilan/services/requestCreatePenghasilan';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidPrimary from '../../../components/buttons/solid/ButtonSolidPrimary';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

const FormCreate: React.FC = () => {
  const navigate = useNavigate();
  const handleCreate = async (e: { jumlah_penghasilan: string }) => {
    const { jumlah_penghasilan } = e;
    const request = await requestCreatePenghasilan(jumlah_penghasilan);
    if (request === true) {
      navigate('/penghasilan');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Penghasilan"
        menus={[
          {
            label: 'Penghasilan',
            link: '/penghasilan',
            icon: 'material-symbols:money',
          },
          {
            label: 'Tambah Penghasilan',
            link: '/penghasilan/tambah-penghasilan',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            jumlah_penghasilan: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} />

              <div className="md:flex justify-end gap-3">
                <ButtonSolidPrimary text={'Tambah Jumlah Penghasilan'} width={'md:w-auto w-full'} onClick={() => handleCreate(values)} />
                <Link to={'/penghasilan'}>
                  <ButtonSolidDanger text={'Batal'} width={'md:w-auto w-full'} />
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
