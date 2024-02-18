import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { requestGetPengajarByID } from '../../../api/pengajar/services/requestGetPengajarByID';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidSuccess from '../../../components/buttons/solid/ButtonSolidSuccess';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import { requestUpdatePengajar } from '../../../api/pengajar/services/requestUpdatePengajar';

type Pengajar = {
  nama_pengajar: string;
  no_telepon_pengajar: string;
  gelar_pengajar: string;
  keahlian_pengajar: string;
  pengalaman_pengajar: string;
  foto_pengajar: string;
  sertifikat_pengajar: string;
};

const FormUpdate: React.FC = () => {
  const navigate = useNavigate();
  const { id_pengajar } = useParams<{ id_pengajar: string }>();
  const [formData, setFormData] = useState<Pengajar>({
    nama_pengajar: '',
    no_telepon_pengajar: '',
    gelar_pengajar: '',
    keahlian_pengajar: '',
    pengalaman_pengajar: '',
    foto_pengajar: '',
    sertifikat_pengajar: '',
  });

  useEffect(() => {
    requestGetPengajarByID(id_pengajar ?? '').then((response: any) => {
      setFormData(response.data);
    });
  }, [id_pengajar]);

  const handleUpdate = async (values: any) => {
    const request = await requestUpdatePengajar(id_pengajar ?? '', { ...values });
    if (request === true) {
      navigate('/pengajar');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Pengajar"
        menus={[
          {
            label: 'Pengajar',
            link: '/pengajar',
            icon: 'mdi:teacher',
          },
          {
            label: 'Update Pengajar',
            link: `/pengajar/update-pengajar/${id_pengajar}`,
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          enableReinitialize={true}
          initialValues={{
            nama_pengajar: formData.nama_pengajar,
            no_telepon_pengajar: formData.no_telepon_pengajar,
            gelar_pengajar: formData.gelar_pengajar,
            keahlian_pengajar: formData.keahlian_pengajar,
            pengalaman_pengajar: formData.pengalaman_pengajar,
            foto_pengajar: formData.foto_pengajar,
            sertifikat_pengajar: formData.sertifikat_pengajar,
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
        >
          {({ errors, handleChange, submitCount, values, setFieldValue }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} setFieldValue={setFieldValue} />

              <div className="flex gap-3 justify-end">
                <ButtonSolidSuccess text={'Update Pengajar'} width={'w-auto'} onClick={() => handleUpdate(values)} />
                <Link to={'/pengajar'}>
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
