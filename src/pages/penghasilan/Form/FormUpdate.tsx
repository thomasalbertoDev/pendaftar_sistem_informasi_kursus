import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestUpdatePenghasilan } from '../../../api/penghasilan/services/requestUpdatePenghasilan';
import { requestGetPenghasilanByID } from '../../../api/penghasilan/services/requestGetPenghasilanByID';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import ButtonSolidSuccess from '../../../components/buttons/solid/ButtonSolidSuccess';

const FormUpdate: React.FC = () => {
  const navigate = useNavigate();
  const { id_penghasilan } = useParams<{ id_penghasilan: string }>();
  const [jumlahPenghasilan, setJumlahPenghasilan] = useState<string>('');

  useEffect(() => {
    requestGetPenghasilanByID(id_penghasilan ?? '').then((response) => {
      setJumlahPenghasilan(response?.data?.jumlah_penghasilan || '');
    });
  }, []);

  const handleUpdate = async (e: { jumlah_penghasilan: string }) => {
    const { jumlah_penghasilan } = e;
    const request = await requestUpdatePenghasilan(id_penghasilan ?? '', jumlah_penghasilan);
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
            label: 'Update Penghasilan',
            link: `/penghasilan/update-penghasilan/${id_penghasilan}`,
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          enableReinitialize={true}
          initialValues={{
            jumlah_penghasilan: jumlahPenghasilan,
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
        >
          {({ errors, handleChange, submitCount, values }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} />

              <div className="md:flex justify-end gap-3">
                <ButtonSolidSuccess text={'Update Penghasilan'} width={'md:w-auto w-full'} onClick={() => handleUpdate(values)} />
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

export default FormUpdate;
