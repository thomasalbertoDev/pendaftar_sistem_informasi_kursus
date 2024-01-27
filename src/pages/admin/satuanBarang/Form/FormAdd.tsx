import { Form, Link, useNavigate } from 'react-router-dom';
import BreadcrumbsDefault from '../../../../components/breadcrumbs/BreadcrumbsDefault';
import { requestPostSatuanBarang } from '../api/services/requestPostSatuanBarang';
import { Formik } from 'formik';
import InputText from '../../../../components/forms/Input/InputText';
import ButtonSolidPrimary from '../../../../components/buttons/solid/ButtonSolidPrimary';
import ButtonSolidDanger from '../../../../components/buttons/solid/ButtonSolidDanger';
import { validationSchema } from './validationSchema';

const FormAdd = () => {
  const navigate = useNavigate();
  const handleCreate = async (e: { nama_satuan_barang: string }): Promise<any> => {
    const { nama_satuan_barang } = e;
    const request = await requestPostSatuanBarang(nama_satuan_barang);
    if (request) {
      navigate('/satuan-barang');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Satuan Barang"
        menus={[
          {
            label: 'Satuan Barang',
            link: '/satuan-barang',
            icon: 'mdi:text-box',
          },
          {
            label: 'Tambah Satuan Barang',
            link: '/satuan-barang/tambah-satuan-barang',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            nama_satuan_barang: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values }) => (
            <Form className="space-y-5">
              <div className={submitCount ? (errors.nama_satuan_barang ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'nama_satuan_barang'}
                  name={'nama_satuan_barang'}
                  label={'Satuan Barang'}
                  value={values.nama_satuan_barang}
                  onChange={handleChange}
                  error={errors.nama_satuan_barang || ''}
                  placeholder={'Masukkan Satuan Barang'}
                  isInputFilled={'Form Satuan Barang Sudah Terisi'}
                />
              </div>

              <div className="flex gap-3 justify-end">
                <ButtonSolidPrimary text={'Tambah Satuan Barang'} width={'w-auto'} onClick={() => handleCreate(values)} />
                <Link to={'/satuan-barang'}>
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
