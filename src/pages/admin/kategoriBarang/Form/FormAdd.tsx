import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { Form, Link, useNavigate } from 'react-router-dom';
import { requestPostKategoriBarang } from '../api/services/requestPostKategoriBarang';
import InputText from '../../../../components/forms/Input/InputText';
import ButtonSolidDanger from '../../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidPrimary from '../../../../components/buttons/solid/ButtonSolidPrimary';
import BreadcrumbsDefault from '../../../../components/breadcrumbs/BreadcrumbsDefault';

const FormAdd = () => {
  const navigate = useNavigate();
  const handleCreate = async (e: { nama_kategori_barang: string }): Promise<any> => {
    const { nama_kategori_barang } = e;
    const request = await requestPostKategoriBarang(nama_kategori_barang);
    if (request) {
      navigate('/kategori-barang');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Kategori Barang"
        menus={[
          {
            label: 'Kategori Barang',
            link: '/kategori-barang',
            icon: 'mdi:list-box',
          },
          {
            label: 'Tambah Kategori Barang',
            link: '/kategori-barang/tambah-kategori-barang',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            nama_kategori_barang: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values }) => (
            <Form className="space-y-5">
              <div className={submitCount ? (errors.nama_kategori_barang ? 'has-error' : 'has-success') : ''}>
                <InputText
                  id={'nama_kategori_barang'}
                  name={'nama_kategori_barang'}
                  label={'Kategori Barang'}
                  value={values.nama_kategori_barang}
                  onChange={handleChange}
                  error={errors.nama_kategori_barang || ''}
                  placeholder={'Masukkan Kategori Barang'}
                  isInputFilled={'Form Kategori Barang Sudah Terisi'}
                />
              </div>

              <div className="flex gap-3 justify-end">
                <ButtonSolidPrimary text={'Tambah Kategori Barang'} width={'w-auto'} onClick={() => handleCreate(values)} />
                <Link to={'/kategori-barang'}>
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
