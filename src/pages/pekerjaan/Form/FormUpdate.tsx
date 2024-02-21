import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { useEffect, useState } from 'react';
import { requestUpdatePekerjaan } from '../../../api/pekerjaan/services/requestUpdatePekerjaan';
import { requestGetPekerjaanByID } from '../../../api/pekerjaan/services/requestGetPekerjaanByID';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidSuccess from '../../../components/buttons/solid/ButtonSolidSuccess';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

interface Pekerjaan {
  nama_pekerjaan: string;
}

const FormUpdate: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { id_pekerjaan } = useParams<{ id_pekerjaan: string }>();
  const [namaPekerjaan, setNamaPekerjaan] = useState<string>('');

  useEffect(() => {
    requestGetPekerjaanByID(id_pekerjaan ?? '').then((response) => {
      setNamaPekerjaan(response?.data?.nama_pekerjaan || '');
    });
  }, []);

  const handleUpdate = async (values: Pekerjaan) => {
    const request = await requestUpdatePekerjaan(id_pekerjaan ?? '', { ...values });
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
            label: 'Update Pekerjaan',
            link: `/pekerjaan/update-pekerjaan/${id_pekerjaan}`,
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          enableReinitialize={true}
          initialValues={{
            nama_pekerjaan: namaPekerjaan,
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
        >
          {({ errors, handleChange, submitCount, values }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} />

              <div className="flex gap-3 justify-end">
                <ButtonSolidSuccess text={'Update Pekerjaan'} width={'w-auto'} onClick={() => handleUpdate(values)} />
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

export default FormUpdate;
