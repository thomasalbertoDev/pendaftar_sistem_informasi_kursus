import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestUpdatePendidikan } from '../../../api/pendidikan/services/requestUpdatePendidikan';
import { requestGetPendidikanByID } from '../../../api/pendidikan/services/requestGetPendidikanByID';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidSuccess from '../../../components/buttons/solid/ButtonSolidSuccess';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

interface Pendidikan {
  nama_pendidikan: string;
}

const FormUpdate: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { id_pendidikan } = useParams<{ id_pendidikan: string }>();
  const [namaPendidikan, setNamaPendidikan] = useState<string>('');

  useEffect(() => {
    requestGetPendidikanByID(id_pendidikan ?? '').then((response) => {
      setNamaPendidikan(response?.data?.nama_pendidikan || '');
    });
  }, []);

  const handleUpdate = async (formData: Pendidikan) => {
    const request = await requestUpdatePendidikan(id_pendidikan ?? '', formData);
    if (request === true) {
      navigate('/pendidikan');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Update Pendidikan"
        menus={[
          {
            label: 'Pendidikan',
            link: '/pendidikan',
            icon: 'bxs:graduation',
          },
          {
            label: 'Update Pendidikan',
            link: `/pendidikan/update-pendidikan/${id_pendidikan}`,
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          enableReinitialize={true}
          initialValues={{
            nama_pendidikan: namaPendidikan,
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
        >
          {({ errors, handleChange, submitCount, values }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} />

              <div className="flex gap-3 justify-end">
                <ButtonSolidSuccess text={'Update Pendidikan'} width={'w-auto'} onClick={() => handleUpdate(values)} />
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

export default FormUpdate;
