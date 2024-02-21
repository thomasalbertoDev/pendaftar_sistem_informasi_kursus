import React, { useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { Link, useNavigate } from 'react-router-dom';
import { requestCreateSekolah } from '../../../api/sekolah/services/requestCreateSekolah';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidPrimary from '../../../components/buttons/solid/ButtonSolidPrimary';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

interface Sekolah {
  npsn: number;
  nama_sekolah: string;
  alamat: string;
  kode_pos: number;
  provinsi: string;
  kabupaten: string;
  kecamatan: string;
  kelurahan: string;
  status_sekolah: string;
  jenjang_pendidikan: string;
  akreditasi: string;
  email_sekolah: string;
  no_telepon_sekolah: string;
}

const FormCreate: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [selectedProvinsiId, setSelectedProvinsiId] = useState<string>('');
  const [selectedKabupatenId, setSelectedKabupatenId] = useState<string>('');
  const [selectedKecamatanId, setSelectedKecamatanId] = useState<string>('');
  const [selectedKelurahanId, setSelectedKelurahanId] = useState<string>('');

  const handleCreate = async (formData: Sekolah) => {
    const request = await requestCreateSekolah(formData);
    if (request === true) {
      navigate('/sekolah');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Tambah Sekolah"
        menus={[
          {
            label: 'Sekolah',
            link: '/sekolah',
            icon: 'emojione-monotone:school',
          },
          {
            label: 'Tambah Sekolah',
            link: '/sekolah/tambah-sekolah',
          },
        ]}
      />

      <div className="mt-10">
        <Formik
          initialValues={{
            npsn: 0 as number,
            nama_sekolah: '' as string,
            alamat: '' as string,
            kode_pos: 0 as number,
            provinsi: '' as string,
            kabupaten: '' as string,
            kecamatan: '' as string,
            kelurahan: '' as string,
            status_sekolah: '' as string,
            jenjang_pendidikan: '' as string,
            akreditasi: '' as string,
            email_sekolah: '' as string,
            no_telepon_sekolah: '' as string,
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values, setFieldValue }) => (
            <>
              <FormLayouts
                values={values}
                errors={errors}
                submitCount={submitCount}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
                selectedProvinsiId={selectedProvinsiId === '' ? values.provinsi : selectedProvinsiId}
                setSelectedProvinsiId={selectedProvinsiId === '' ? (id: string) => setFieldValue('provinsi', id) : setSelectedProvinsiId}
                selectedKabupatenId={selectedKabupatenId === '' ? values.kabupaten : selectedKabupatenId}
                setSelectedKabupatenId={selectedKabupatenId === '' ? (id: string) => setFieldValue('kabupaten', id) : setSelectedKabupatenId}
                selectedKecamatanId={selectedKecamatanId === '' ? values.kecamatan : selectedKecamatanId}
                setSelectedKecamatanId={selectedKecamatanId === '' ? (id: string) => setFieldValue('kecamatan', id) : setSelectedKecamatanId}
                selectedKelurahanId={selectedKelurahanId === '' ? values.kelurahan : selectedKelurahanId}
                setSelectedKelurahanId={selectedKelurahanId === '' ? (id: string) => setFieldValue('kelurahan', id) : setSelectedKelurahanId}
              />

              <div className="md:flex justify-end gap-3">
                <ButtonSolidPrimary text={'Tambah Sekolah'} width={'md:w-auto w-full'} onClick={() => handleCreate(values)} />
                <Link to={'/sekolah'}>
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

export default FormCreate;
