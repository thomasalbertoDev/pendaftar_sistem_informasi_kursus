import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { requestGetSekolahByID } from '../../../api/sekolah/services/requestGetSekolahByID';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormLayouts from './layouts/FormLayouts';
import ButtonSolidDanger from '../../../components/buttons/solid/ButtonSolidDanger';
import ButtonSolidSuccess from '../../../components/buttons/solid/ButtonSolidSuccess';
import BreadcrumbsDefault from '../../../components/breadcrumbs/BreadcrumbsDefault';
import { requestUpdateSekolah } from '../../../api/sekolah/services/requestUpdateSekolah';

const FormUpdate: React.FC = () => {
  const navigate = useNavigate();
  const { id_sekolah } = useParams<{ id_sekolah: string }>();
  const [formData, setFormData] = useState<any>({
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
  });

  const [selectedProvinsiId, setSelectedProvinsiId] = useState<string>('');
  const [selectedKabupatenId, setSelectedKabupatenId] = useState<string>('');
  const [selectedKecamatanId, setSelectedKecamatanId] = useState<string>('');
  const [selectedKelurahanId, setSelectedKelurahanId] = useState<string>('');

  useEffect(() => {
    requestGetSekolahByID(id_sekolah ?? '').then((response: any) => {
      const { data } = response;
      setFormData(data);
      setSelectedProvinsiId(data.provinsi);
      setSelectedKabupatenId(data.kabupaten);
      setSelectedKecamatanId(data.kecamatan);
      setSelectedKelurahanId(data.kelurahan);
    });
  }, [id_sekolah]);

  // Efek samping untuk memperbarui nilai form data berdasarkan nilai yang dipilih
  useEffect(() => {
    if (selectedProvinsiId !== '') {
      setFormData((prevState: any) => ({ ...prevState, provinsi: selectedProvinsiId }));
    }
  }, [selectedProvinsiId]);

  useEffect(() => {
    if (selectedKabupatenId !== '') {
      setFormData((prevState: any) => ({ ...prevState, kabupaten: selectedKabupatenId }));
    }
  }, [selectedKabupatenId]);

  useEffect(() => {
    if (selectedKecamatanId !== '') {
      setFormData((prevState: any) => ({ ...prevState, kecamatan: selectedKecamatanId }));
    }
  }, [selectedKecamatanId]);

  useEffect(() => {
    if (selectedKelurahanId !== '') {
      setFormData((prevState: any) => ({ ...prevState, kelurahan: selectedKelurahanId }));
    }
  }, [selectedKelurahanId]);

  const handleUpdate = async (values: any) => {
    const request = await requestUpdateSekolah(id_sekolah ?? '', values);
    if (request === true) {
      navigate('/sekolah');
    }
  };

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
                errors={errors}
                handleChange={handleChange}
                submitCount={submitCount}
                values={values}
                setFieldValue={setFieldValue}
                selectedProvinsiId={selectedProvinsiId === '' ? formData.provinsi : selectedProvinsiId}
                setSelectedProvinsiId={selectedProvinsiId === '' ? (id: string) => setFormData({ ...formData, provinsi: id }) : setSelectedProvinsiId}
                selectedKabupatenId={selectedKabupatenId === '' ? formData.kabupaten : selectedKabupatenId}
                setSelectedKabupatenId={selectedKabupatenId === '' ? (id: string) => setFormData({ ...formData, kabupaten: id }) : setSelectedKabupatenId}
                selectedKecamatanId={selectedKecamatanId === '' ? formData.kecamatan : selectedKecamatanId}
                setSelectedKecamatanId={selectedKecamatanId === '' ? (id: string) => setFormData({ ...formData, kecamatan: id }) : setSelectedKecamatanId}
                selectedKelurahanId={selectedKelurahanId === '' ? formData.kelurahan : selectedKelurahanId}
                setSelectedKelurahanId={selectedKelurahanId === '' ? (id: string) => setFormData({ ...formData, kelurahan: id }) : setSelectedKelurahanId}
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
