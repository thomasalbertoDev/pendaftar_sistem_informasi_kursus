import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { Link, useNavigate } from 'react-router-dom';
import { requestCreatePekerjaan } from '../../../api/pekerjaan/services/requestCreatePekerjaan';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import ButtonSolidPrimary from '../../../components/buttons/solid/ButtonSolidPrimary';

interface Pekerjaan {
  nama_pekerjaan: string;
}

const FormCreate: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const handleCreate = async (formData: Pekerjaan) => {
    const request = await requestCreatePekerjaan(formData);
    if (request === true) {
      navigate('/pekerjaan');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Pekerjaan"
        menus={[
          {
            label: 'Pekerjaan',
            link: '/pekerjaan',
            icon: 'pajamas:work',
          },
          {
            label: 'Tambah Pekerjaan',
            link: '/pekerjaan/tambah-pekerjaan',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            nama_pekerjaan: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} />

              <div className="flex gap-3 justify-end">
                <ButtonSolidPrimary text={'Tambah Pekerjaan'} width={'w-auto'} onClick={() => handleCreate(values)} />
                <Link to={'/pekerjaan'}>
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
