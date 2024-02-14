import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestUpdateAgama } from '../../../api/agama/services/requestUpdateAgama';
import { requestGetAgamaByID } from '../../../api/agama/services/requestGetAgamaByID';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import ButtonSolidSuccess from '../../../components/buttons/solid/ButtonSolidSuccess';

const FormUpdate: React.FC = () => {
  const navigate = useNavigate();
  const { id_agama } = useParams<{ id_agama: string }>();
  const [namaAgama, setNamaAgama] = useState<string>('');

  useEffect(() => {
    requestGetAgamaByID(id_agama ?? '').then((response) => {
      setNamaAgama(response?.data?.nama_agama || '');
    });
  }, []);

  const handleUpdate = async (e: { nama_agama: string }) => {
    const { nama_agama } = e;
    const request = await requestUpdateAgama(id_agama ?? '', nama_agama);
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
            label: 'Update Agama',
            link: `/agama/update-agama/${id_agama}`,
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          enableReinitialize={true}
          initialValues={{
            nama_agama: namaAgama,
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
        >
          {({ errors, handleChange, submitCount, values }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} />

              <div className="flex gap-3 justify-end">
                <ButtonSolidSuccess text={'Update Agama'} width={'w-auto'} onClick={() => handleUpdate(values)} />
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

export default FormUpdate;
