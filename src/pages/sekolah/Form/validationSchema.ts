import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  npsn: yup.number().required('NPSN Wajib Diisi'),
  nama_sekolah: yup.string().required('Nama Sekolah Wajib Diisi'),
  alamat: yup.string().required('Alamat Wajib Diisi'),
  kode_pos: yup.number().required('Kode Pos Wajib Diisi'),
  provinsi: yup.string().required('Provinsi Wajib Diisi'),
  kabupaten: yup.string().required('Kabupaten Wajib Diisi'),
  kecamatan: yup.string().required('Kecamatan Wajib Diisi'),
  kelurahan: yup.string().required('Kelurahan Wajib Diisi'),
  status_sekolah: yup.string().required('Status Sekolah Wajib Diisi'),
  jenjang_pendidikan: yup.string().required('Jenjang Pendidikan Wajib Diisi'),
  akreditasi: yup.string().required('Akreditasi Wajib Diisi'),
  email_sekolah: yup.string().required('Email Sekolah Wajib Diisi'),
  no_telepon_sekolah: yup.string().required('No Telepon Sekolah Wajib Diisi'),
});
