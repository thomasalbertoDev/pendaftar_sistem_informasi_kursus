import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestPutAgama } from '../api/services/requestPutAgama';
import { useState, useEffect } from 'react';
import { requestGetAgamaByID } from '../api/services/requestGetAgamaByID';
import { Form, Link, useNavigate, useParams } from 'react-router-dom';
import InputText from '../../../../components/forms/Input/InputText';
import ButtonSolidDanger from '../../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidSuccess from '../../../../components/buttons/solid/ButtonSolidSuccess';
import BreadcrumbsDefault from '../../../../components/breadcrumbs/BreadcrumbsDefault';

const FormEdit = () => {
  const navigate = useNavigate();
  const { id_agama } = useParams();
  const [namaAgama, setNamaAgama] = useState('');

  useEffect(() => {
    requestGetAgamaByID(id_agama ?? '').then((response) => {
      setNamaAgama(response?.data?.nama_agama || '');
    });
  }, []);

  const handleUpdate = async (e: { nama_agama: string }): Promise<any> => {
    const { nama_agama } = e;
    const request = await requestPutAgama(id_agama ?? '', nama_agama);
    if (request) {
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
            label: 'Edit Agama',
            link: `/agama/edit-agama/${id_agama}`,
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
            <Form className="space-y-5">
              <div className={submitCount ? (errors.nama_agama ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'nama_agama'}
                  name={'nama_agama'}
                  label={'Nama Agama'}
                  value={values.nama_agama}
                  onChange={handleChange}
                  error={errors.nama_agama || ''}
                  placeholder={'Masukkan Nama Agama'}
                  isInputFilled={'Form Nama Agama Sudah Terisi'}
                />
              </div>

              <div className="flex gap-3 justify-end">
                <ButtonSolidSuccess text={'Edit Agama'} width={'w-auto'} onClick={() => handleUpdate(values)} />
                <Link to={'/agama'}>
                  <ButtonSolidDanger text={'Batal'} width={'w-auto'} />
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormEdit;
