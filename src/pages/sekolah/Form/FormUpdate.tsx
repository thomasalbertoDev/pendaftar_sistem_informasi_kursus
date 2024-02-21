import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestUpdateSekolah } from '../../../api/sekolah/services/requestUpdateSekolah';
import { requestGetSekolahByID } from '../../../api/sekolah/services/requestGetSekolahByID';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidSuccess from '../../../components/buttons/solid/ButtonSolidSuccess';
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

const FormUpdate: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { id_sekolah } = useParams<{ id_sekolah: string }>();
  const [formData, setFormData] = useState<Sekolah>({
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
  });

  const [selectedLocation, setSelectedLocation] = useState({
    provinsi: '' as string,
    kabupaten: '' as string,
    kecamatan: '' as string,
    kelurahan: '' as string,
  });

  useEffect(() => {
    requestGetSekolahByID(id_sekolah ?? '').then((response: any) => {
      const { data } = response;
      setFormData(data);
      setSelectedLocation({
        provinsi: data.provinsi,
        kabupaten: data.kabupaten,
        kecamatan: data.kecamatan,
        kelurahan: data.kelurahan,
      });
    });
  }, [id_sekolah]);

  const handleLocationChange = (field: string, value: string) => {
    setSelectedLocation((prevIds) => ({ ...prevIds, [field]: value }));
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleUpdate = async (formData: Sekolah) => {
    const request = await requestUpdateSekolah(id_sekolah ?? '', formData);
    if (request === true) {
      navigate('/sekolah');
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Update Sekolah"
        menus={[
          {
            label: 'Sekolah',
            link: '/sekolah',
            icon: 'emojione-monotone:school',
          },
          {
            label: 'Update Sekolah',
            link: `/sekolah/update-sekolah/${id_sekolah}`,
          },
        ]}
      />

      <div className="mt-10">
        <Formik enableReinitialize={true} initialValues={formData} validationSchema={validationSchema} onSubmit={handleUpdate}>
          {({ errors, handleChange, submitCount, values, setFieldValue }) => (
            <>
              <FormLayouts
                values={values}
                errors={errors as Record<string, string>}
                handleChange={handleChange}
                submitCount={submitCount}
                setFieldValue={setFieldValue}
                selectedProvinsiId={selectedLocation.provinsi}
                setSelectedProvinsiId={(id: string) => handleLocationChange('provinsi', id)}
                selectedKabupatenId={selectedLocation.kabupaten}
                setSelectedKabupatenId={(id: string) => handleLocationChange('kabupaten', id)}
                selectedKecamatanId={selectedLocation.kecamatan}
                setSelectedKecamatanId={(id: string) => handleLocationChange('kecamatan', id)}
                selectedKelurahanId={selectedLocation.kelurahan}
                setSelectedKelurahanId={(id: string) => handleLocationChange('kelurahan', id)}
              />

              <div className="md:flex justify-end gap-3">
                <ButtonSolidSuccess text={'Update Sekolah'} width={'md:w-auto w-full'} onClick={() => handleUpdate(values)} />
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

export default FormUpdate;
