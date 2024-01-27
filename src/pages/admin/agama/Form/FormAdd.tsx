import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestPostAgama } from '../api/services/requestPostAgama';
import { Form, Link, useNavigate } from 'react-router-dom';
import InputText from '../../../../components/forms/Input/InputText';
import ButtonSolidDanger from '../../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidPrimary from '../../../../components/buttons/solid/ButtonSolidPrimary';
import BreadcrumbsDefault from '../../../../components/breadcrumbs/BreadcrumbsDefault';

const FormAdd = () => {
  const navigate = useNavigate();
  const handleCreate = async (e: { nama_agama: string }): Promise<any> => {
    const { nama_agama } = e;
    const request = await requestPostAgama(nama_agama);
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
                <ButtonSolidPrimary text={'Tambah Agama'} width={'w-auto'} onClick={() => handleCreate(values)} />
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

export default FormAdd;
