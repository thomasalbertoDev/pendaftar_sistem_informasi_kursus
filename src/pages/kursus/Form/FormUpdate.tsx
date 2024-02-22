import React, { useEffect, useState } from 'react';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { requestGetKursusByID } from '../../../api/kursus/services/requestGetKursusByID';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidSuccess from '../../../components/buttons/solid/ButtonSolidSuccess';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import { requestUpdateKursus } from '../../../api/kursus/services/requestUpdateKursus';

interface Kursus {
  nama_kursus: string;
  topik_kursus: string;
  jenjang_kursus: string;
  pengajar_ID: string;
  jam_mulai: string;
  jam_selesai: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
  hari_kursus: string;
  harga_kursus: number;
  foto_kursus: string;
  syarat_kursus: string;
  deskripsi_kursus: string;
  modul_kursus: string;
}

const FormUpdate: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { id_kursus } = useParams<{ id_kursus: string }>();
  const [formData, setFormData] = useState<Kursus>({
    nama_kursus: '' as string,
    topik_kursus: '' as string,
    jenjang_kursus: '' as string,
    pengajar_ID: '' as string,
    jam_mulai: '' as string,
    jam_selesai: '' as string,
    tanggal_mulai: '' as string,
    tanggal_selesai: '' as string,
    hari_kursus: '' as string,
    harga_kursus: 0 as number,
    foto_kursus: '' as string,
    syarat_kursus: '' as string,
    deskripsi_kursus: '' as string,
    modul_kursus: '' as string,
  });

  useEffect(() => {
    requestGetKursusByID(id_kursus ?? '').then((response: any) => {
      setFormData({
        nama_kursus: response.data.nama_kursus,
        topik_kursus: response.data.topik_kursus,
        jenjang_kursus: response.data.jenjang_kursus,
        pengajar_ID: response.data.pengajar?.id_pengajar,
        jam_mulai: response.data.jam_mulai,
        jam_selesai: response.data.jam_selesai,
        tanggal_mulai: response.data.tanggal_mulai,
        tanggal_selesai: response.data.tanggal_selesai,
        hari_kursus: response.data.hari_kursus,
        harga_kursus: response.data.harga_kursus,
        foto_kursus: response.data.foto_kursus,
        syarat_kursus: response.data.syarat_kursus,
        deskripsi_kursus: response.data.deskripsi_kursus,
        modul_kursus: response.data.modul_kursus,
      });
    });
  }, [id_kursus]);

  const handleUpdate = async (formData: Kursus) => {
    const request = await requestUpdateKursus(id_kursus ?? '', formData);
    if (request === true) {
      navigate('/kursus');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Update Kursus"
        menus={[
          {
            label: 'Kursus',
            link: '/kursus',
            icon: 'dashicons:welcome-learn-more',
          },
          {
            label: 'Update Kursus',
            link: `/kursus/update-kursus/${id_kursus}`,
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          enableReinitialize={true}
          initialValues={{
            nama_kursus: formData.nama_kursus,
            topik_kursus: formData.topik_kursus,
            jenjang_kursus: formData.jenjang_kursus,
            pengajar_ID: formData.pengajar_ID,
            jam_mulai: formData.jam_mulai,
            jam_selesai: formData.jam_selesai,
            tanggal_mulai: formData.tanggal_mulai,
            tanggal_selesai: formData.tanggal_selesai,
            hari_kursus: formData.hari_kursus,
            harga_kursus: formData.harga_kursus,
            foto_kursus: formData.foto_kursus,
            syarat_kursus: formData.syarat_kursus,
            deskripsi_kursus: formData.deskripsi_kursus,
            modul_kursus: formData.modul_kursus,
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
        >
          {({ errors, handleChange, submitCount, values, setFieldValue }) => (
            <>
              <FormLayouts errors={errors} handleChange={handleChange} submitCount={submitCount} values={values} setFieldValue={setFieldValue} />

              <div className="flex gap-3 justify-end">
                <ButtonSolidSuccess text={'Update Kursus'} width={'w-auto'} onClick={() => handleUpdate(values)} />
                <Link to={'/kursus'}>
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
