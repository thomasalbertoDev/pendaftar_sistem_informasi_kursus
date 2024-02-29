import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { validationSchema } from './validationSchema';
import { requestGetPendaftaranByID } from '../../api/pendaftaran/service/requestGetPendaftaranByID';
import InputFile from '../../components/forms/Input/InputFile';
import ModalBasic from '../../components/modals/ModalBasic';
import FormatTanggal from '../../helpers/FormatTanggal';
import ButtonSolidInfo from '../../components/buttons/solid/ButtonSolidInfo';
import AlertSolidSuccess from '../../components/alerts/solid/AlertSolidSuccess';
import BreadcrumbsDefault from '../../components/breadcrumbs/BreadcrumbsDefault';
import ButtonIconTextLeft from '../../components/buttons/icon/ButtonIconTextLeft';
import { requestCreatePembayaran } from '../../api/pembayaran/services/requestCreatePembayaran';

const DataPendaftaran: React.FunctionComponent = () => {
  const { id_pendaftaran } = useParams<{ id_pendaftaran: string }>();
  const dispatch = useDispatch();
  const [pendaftarKursus, setPendaftarKursus] = useState<any>({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(setPageTitle('Data Pendaftaran'));

    requestGetPendaftaranByID(id_pendaftaran ?? '').then((response) => {
      setPendaftarKursus(response?.data);
    });
  }, [dispatch]);

  // Buka Modal
  const showModal = () => {
    setOpenModal(true);
  };

  // Tutup Modal
  const closeModal = () => {
    setOpenModal(false);
  };

  const handleUpload = async (formData: any) => {
    const isUpload = await requestCreatePembayaran(id_pendaftaran ?? '', formData);
    if (isUpload === true) {
      closeModal();
    }
  };

  return (
    <>
      <BreadcrumbsDefault
        header="Data Pendaftar Kursus"
        menus={[
          {
            label: 'Pendaftaran',
            link: `/pendaftaran`,
            icon: 'mdi:user-add',
          },
          {
            label: 'Data Pendaftaran',
            link: `/pendaftaran/data-pendaftaran/${id_pendaftaran}`,
          },
        ]}
      />

      <div className="w-full my-5">
        <AlertSolidSuccess title="INFO" text="Data Anda Sudah Diverifikasi , Silahkan Upload Bukti Pembayaran" />
      </div>

      <div className="flex justify-end">
        <ButtonIconTextLeft text={'Upload Bukti Pembayaran'} icon={'ic:baseline-plus'} backgroundColor={'btn-info'} onClick={() => showModal()} />
      </div>

      <Formik
        initialValues={{
          bukti_pembayaran: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleUpload}
      >
        {({ errors, values, setFieldValue }) => (
          <>
            <ModalBasic
              title={'Bukti Pembayaran'}
              show={openModal}
              open={openModal}
              onClose={closeModal}
              onClick={closeModal}
              children={
                <>
                  <InputFile
                    id={'bukti_pembayaran'}
                    name={'bukti_pembayaran'}
                    value={values.bukti_pembayaran}
                    onChange={(e: any) => {
                      setFieldValue('bukti_pembayaran', e.target.files[0]);
                    }}
                    label={'Bukti Pembayaran'}
                    error={errors.bukti_pembayaran || ''}
                    isInputFilled={'Form Bukti Pembayaran Sudah Diisi'}
                  />
                  <div className="flex gap-3 justify-end">
                    <ButtonSolidInfo text={'Upload Bukti Pembayaran'} width={'w-auto'} onClick={() => handleUpload(values)} />
                  </div>
                </>
              }
            />
          </>
        )}
      </Formik>

      {/* Data Kursus */}
      <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-xl p-4 mb-5 mt-5 bg-white dark:bg-black">
        <div className="flex items-center justify-between mb-10 px-4 mt-4">
          <h5 className="font-bold text-2xl dark:text-white-light">Data Kursus</h5>
        </div>

        <div className="px-4 mb-10">
          <h1 className="text-base mb-2">Kursus Yang Dipilih :</h1>
          <span className="font-bold italic text-primary">{pendaftarKursus?.kursus?.nama_kursus}</span>
        </div>
      </div>

      {/* Data Pribadi */}
      <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-xl p-4 mb-5 mt-5 bg-white dark:bg-black">
        <div className="flex items-center justify-between mb-10 px-4 mt-4">
          <h5 className="font-bold text-2xl dark:text-white-light">Data Pribadi</h5>
        </div>

        <div className="px-4">
          {/* NISN , NIS , NIK */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {/* NISN */}
            <div className="block">
              <h1 className="text-base mb-2">NISN :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.nisn}</span>
            </div>

            {/* NIS */}
            <div className="block">
              <h1 className="text-base mb-2">NIS :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.nis}</span>
            </div>

            {/* NIK */}
            <div className="block">
              <h1 className="text-base mb-2">NIK :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.nik}</span>
            </div>
          </div>

          {/* Nama Lengkap , Jenis Kelamin , Agama */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {/* Nama Lengkap */}
            <div className="block">
              <h1 className="text-base mb-2">Nama Lengkap :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.nama_lengkap}</span>
            </div>

            {/* Jenis Kelamin */}
            <div className="block">
              <h1 className="text-base mb-2">Jenis Kelamin :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.jenis_kelamin}</span>
            </div>

            {/* Agama */}
            <div className="block">
              <h1 className="text-base mb-2">Agama :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.agama?.nama_agama}</span>
            </div>
          </div>

          {/* Tempat Lahir , Tanggal Lahir */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {/* Tempat Lahir */}
            <div className="block">
              <h1 className="text-base mb-2">Tempat Lahir :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.tempat_lahir}</span>
            </div>

            {/* Tanggal Lahir */}
            <div className="block">
              <h1 className="text-base mb-2">Tanggal Lahir :</h1>
              <span className="font-bold italic text-primary">{FormatTanggal(pendaftarKursus?.tanggal_lahir)}</span>
            </div>
          </div>

          {/* Email , No telepon , alamat */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {/* Email */}
            <div className="block">
              <h1 className="text-base mb-2">Email :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.email}</span>
            </div>

            {/* No Telepon */}
            <div className="block">
              <h1 className="text-base mb-2">No Telepon :</h1>
              <span className="font-bold italic text-primary">+62{pendaftarKursus?.no_telepon}</span>
            </div>

            {/* Alamat */}
            <div className="block">
              <h1 className="text-base mb-2">Alamat :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.alamat}</span>
            </div>
          </div>

          {/* Pas Foto , Foto KK */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {/* Pas Foto */}
            <div className="block">
              <h1 className="text-base mb-2">Pas Foto :</h1>
              <img className="rounded-sm w-44 object-cover" src={`${import.meta.env.VITE_API_URL}/${pendaftarKursus?.pas_foto}`} alt="Pas Foto" />
            </div>

            {/* Foto KK */}
            <div className="block">
              <h1 className="text-base mb-2">Foto KK :</h1>
              <img className="rounded-sm w-44 object-cover" src={`${import.meta.env.VITE_API_URL}/${pendaftarKursus?.foto_kk}`} alt="Foto KK" />
            </div>
          </div>
        </div>
      </div>

      {/* Data Orang Tua */}
      <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-xl p-4 mb-5 mt-5 bg-white dark:bg-black">
        <div className="flex items-center justify-between mb-10 px-4 mt-4">
          <h5 className="font-bold text-2xl dark:text-white-light">Data Orang Tua</h5>
        </div>

        <div className="px-4">
          {/* Data Ayah */}
          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {/* Nama Ayah */}
            <div className="block">
              <h1 className="text-base mb-2">Nama Ayah :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.nama_ayah}</span>
            </div>

            {/* Pekerjaan Ayah */}
            <div className="block">
              <h1 className="text-base mb-2">Pekerjaan Ayah :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.pekerjaan_ayah?.nama_pekerjaan}</span>
            </div>

            {/* No Telepon Ayah */}
            <div className="block">
              <h1 className="text-base mb-2">No Telepon Ayah :</h1>
              <span className="font-bold italic text-primary">+62{pendaftarKursus?.no_telepon_ayah}</span>
            </div>

            {/* Pendidikan Ayah */}
            <div className="block">
              <h1 className="text-base mb-2">Pendidikan Ayah :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.pendidikan_ayah?.nama_pendidikan}</span>
            </div>
          </div>

          {/* Data Ibu */}
          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {/* Nama Ibu */}
            <div className="block">
              <h1 className="text-base mb-2">Nama Ibu :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.nama_ibu}</span>
            </div>

            {/* Pekerjaan Ibu */}
            <div className="block">
              <h1 className="text-base mb-2">Pekerjaan Ibu :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.pekerjaan_ibu?.nama_pekerjaan}</span>
            </div>

            {/* No Telepon Ibu */}
            <div className="block">
              <h1 className="text-base mb-2">No Telepon Ibu :</h1>
              <span className="font-bold italic text-primary">+62{pendaftarKursus?.no_telepon_ibu}</span>
            </div>

            {/* Pendidikan Ibu */}
            <div className="block">
              <h1 className="text-base mb-2">Pendidikan Ibu :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.pendidikan_ibu?.nama_pendidikan}</span>
            </div>
          </div>

          {/* Slip Gaji Ayah Ibu */}
          <button className="btn btn-primary">
            <a href={`${import.meta.env.VITE_API_URL}/${pendaftarKursus?.slip_gaji_ayah_ibu}`} className="text-white">
              Slip Gaji Ayah Dan Ibu
            </a>
          </button>
        </div>
      </div>

      {/* Data Sekolah */}
      <div className="border border-[#ebedf2] dark:border-[#191e3a] rounded-xl p-4 mb-5 mt-5 bg-white dark:bg-black">
        <div className="flex items-center justify-between mb-10 px-4 mt-4">
          <h5 className="font-bold text-2xl dark:text-white-light">Data Sekolah</h5>
        </div>

        <div className="px-4">
          {/* nama Sekolah */}
          <div className="block mb-10">
            <h1 className="text-base mb-2">Nama Sekolah :</h1>
            <span className="font-bold italic text-primary">{pendaftarKursus?.sekolah?.nama_sekolah}</span>
          </div>

          {/* Nilai Semester 1 - 6*/}
          <div className="grid md:grid-cols-6 gap-4 mb-10">
            {/* Nilai Semester 1 */}
            <div className="block">
              <h1 className="text-base mb-2">Nilai Semester 1 :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.nilai_semester_1}</span>
            </div>

            {/* Nilai Semester 2 */}
            <div className="block">
              <h1 className="text-base mb-2">Nilai Semester 2 :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.nilai_semester_2}</span>
            </div>

            {/* Nilai Semester 3 */}
            <div className="block">
              <h1 className="text-base mb-2">Nilai Semester 3 :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.nilai_semester_3}</span>
            </div>

            {/* Nilai Semester 4 */}
            <div className="block">
              <h1 className="text-base mb-2">Nilai Semester 4 :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.nilai_semester_4}</span>
            </div>

            {/* Nilai Semester 5 */}
            <div className="block">
              <h1 className="text-base mb-2">Nilai Semester 5 :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.nilai_semester_5}</span>
            </div>

            {/* Nilai Semester 6 */}
            <div className="block">
              <h1 className="text-base mb-2">Nilai Semester 6 :</h1>
              <span className="font-bold italic text-primary">{pendaftarKursus?.nilai_semester_6}</span>
            </div>
          </div>

          {/* Raport */}
          <button className="btn btn-primary mb-5">
            <a href={`${import.meta.env.VITE_API_URL}/${pendaftarKursus?.raport}`} className="text-white">
              Raport
            </a>
          </button>

          {/* Prestasi */}
          <button className="btn btn-primary">
            <a href={`${import.meta.env.VITE_API_URL}/${pendaftarKursus?.prestasi}`} className="text-white">
              Prestasi
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default DataPendaftaran;
