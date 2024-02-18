import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  nama_kursus: yup.string().required('Nama Kursus Wajib Diisi'),
  topik_kursus: yup.string().required('Topik Kursus Wajib Diisi'),
  jenjang_kursus: yup.string().required('Jenjang Kursus Wajib Diisi'),
  pengajar_ID: yup.string().required('Pengajar Kursus Wajib Diisi'),
  jam_mulai: yup.string().required('Jam Mulai Kursus Wajib Diisi'),
  jam_selesai: yup.string().required('Jam Selesai Kursus Wajib Diisi'),
  tanggal_mulai: yup.string().required('Tanggal Mulai Kursus Wajib Diisi'),
  tanggal_selesai: yup.string().required('Tanggal Selesai Kursus Wajib Diisi'),
  hari_kursus: yup.array().required('Hari Kursus Wajib Diisi'),
  harga_kursus: yup.number().required('Harga Kursus Wajib Diisi'),
  foto_kursus: yup.string().required('Foto Kursus Wajib Diisi'),
  syarat_kursus: yup.string().required('Syarat Kursus Wajib Diisi'),
  deskripsi_kursus: yup.string().required('Deskripsi Kursus Wajib Diisi'),
  modul_kursus: yup.string().required('Modul Kursus Wajib Diisi'),
});
