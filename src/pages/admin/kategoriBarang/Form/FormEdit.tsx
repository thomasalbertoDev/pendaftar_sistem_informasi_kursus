import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { useState, useEffect } from 'react';
import { requestPutKategoriBarang } from '../api/services/requestPutKategoriBarang';
import { requestGetKategoriBarangByID } from '../api/services/requestGetKategoriBarangByID';
import { Form, Link, useNavigate, useParams } from 'react-router-dom';
import InputText from '../../../../components/forms/Input/InputText';
import ButtonSolidDanger from '../../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidSuccess from '../../../../components/buttons/solid/ButtonSolidSuccess';
import BreadcrumbsDefault from '../../../../components/breadcrumbs/BreadcrumbsDefault';

const FormEdit = () => {
  const navigate = useNavigate();
  const { id_kategori_barang } = useParams();
  const [namaKategoriBarang, setNamaKategoriBarang] = useState('');

  useEffect(() => {
    requestGetKategoriBarangByID(id_kategori_barang ?? '').then((response) => {
      setNamaKategoriBarang(response?.data?.nama_kategori_barang || '');
    });
  }, []);

  const handleUpdate = async (e: { nama_kategori_barang: string }): Promise<any> => {
    const { nama_kategori_barang } = e;
    const request = await requestPutKategoriBarang(id_kategori_barang ?? '', nama_kategori_barang);
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
          enableReinitialize={true}
          initialValues={{
            nama_kategori_barang: namaKategoriBarang,
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
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
                <ButtonSolidSuccess text={'Edit Kategori Barang'} width={'w-auto'} onClick={() => handleUpdate(values)} />
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

export default FormEdit;
