import React, { useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { Link, useNavigate } from 'react-router-dom';
import { requestCreateSekolah } from '../../../api/sekolah/services/requestCreateSekolah';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidPrimary from '../../../components/buttons/solid/ButtonSolidPrimary';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';

const FormCreate: React.FC = () => {
  const navigate = useNavigate();
  const handleCreate = async (e: {
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
  }) => {
    const { npsn, nama_sekolah, alamat, kode_pos, provinsi, kabupaten, kecamatan, kelurahan, status_sekolah, jenjang_pendidikan, akreditasi, email_sekolah, no_telepon_sekolah } = e;

    const request = await requestCreateSekolah(
      npsn,
      nama_sekolah,
      alamat,
      kode_pos,
      provinsi,
      kabupaten,
      kecamatan,
      kelurahan,
      status_sekolah,
      jenjang_pendidikan,
      akreditasi,
      email_sekolah,
      no_telepon_sekolah
    );

    if (request === true) {
      navigate('/sekolah');
    }
  };

  // const handleCreate = async (values: any) => {
  //   console.log(values);
  // };

  const [selectedProvinsiId, setSelectedProvinsiId] = useState<string>('');
  const [selectedKabupatenId, setSelectedKabupatenId] = useState<string>('');
  const [selectedKecamatanId, setSelectedKecamatanId] = useState<string>('');

  return (
    <>
      <BreadcrumbsDefault
        header="Sekolah"
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
            npsn: 0,
            nama_sekolah: '',
            alamat: '',
            kode_pos: 0,
            provinsi: '',
            kabupaten: '',
            kecamatan: '',
            kelurahan: '',
            status_sekolah: '',
            jenjang_pendidikan: '',
            akreditasi: '',
            email_sekolah: '',
            no_telepon_sekolah: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleChange, submitCount, values, setFieldValue }) => (
            <>
              <FormLayouts
                errors={errors}
                handleChange={handleChange}
                submitCount={submitCount}
                values={values}
                setFieldValue={setFieldValue}
                selectedProvinsiId={selectedProvinsiId === '' ? values.provinsi : selectedProvinsiId}
                setSelectedProvinsiId={selectedProvinsiId === '' ? (id: string) => setFieldValue('provinsi', id) : setSelectedProvinsiId}
                selectedKabupatenId={selectedKabupatenId === '' ? values.kabupaten : selectedKabupatenId}
                setSelectedKabupatenId={selectedKabupatenId === '' ? (id: string) => setFieldValue('kabupaten', id) : setSelectedKabupatenId}
                selectedKecamatanId={selectedKecamatanId === '' ? values.kecamatan : selectedKecamatanId}
                setSelectedKecamatanId={selectedKecamatanId === '' ? (id: string) => setFieldValue('kecamatan', id) : setSelectedKecamatanId}
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
