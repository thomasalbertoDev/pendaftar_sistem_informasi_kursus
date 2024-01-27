import { useEffect, useState } from 'react';
import { Form, Link, useNavigate, useParams } from 'react-router-dom';
import BreadcrumbsDefault from '../../../../components/breadcrumbs/BreadcrumbsDefault';
import { requestGetSatuanBarangByID } from '../api/services/requestGetSatuanBarangByID';
import { requestPutSatuanBarang } from '../api/services/requestPutSatuanBarang';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import InputText from '../../../../components/forms/Input/InputText';
import ButtonSolidSuccess from '../../../../components/buttons/solid/ButtonSolidSuccess';
import ButtonSolidDanger from '../../../../components/buttons/solid/ButtonSolidDanger';

const FormEdit = () => {
  const navigate = useNavigate();
  const { id_satuan_barang } = useParams();
  const [namaSatuanBarang, setNamaSatuanBarang] = useState('');

  useEffect(() => {
    requestGetSatuanBarangByID(id_satuan_barang ?? '').then((response) => {
      setNamaSatuanBarang(response?.data?.nama_satuan_barang || '');
    });
  }, []);

  const handleUpdate = async (e: { nama_satuan_barang: string }): Promise<any> => {
    const { nama_satuan_barang } = e;
    const request = await requestPutSatuanBarang(id_satuan_barang ?? '', nama_satuan_barang);
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
            label: 'Edit Satuan Barang',
            link: `/satuan-barang/edit-satuan-barang/${id_satuan_barang}`,
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          enableReinitialize={true}
          initialValues={{
            nama_satuan_barang: namaSatuanBarang,
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
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
                <ButtonSolidSuccess text={'Edit Satuan Barang'} width={'w-auto'} onClick={() => handleUpdate(values)} />
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

export default FormEdit;
