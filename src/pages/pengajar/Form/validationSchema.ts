import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  nama_pengajar: yup.string().required('Nama Pengajar Wajib Diisi'),
  no_telepon_pengajar: yup.string().required('No Telepon Pengajar Wajib Diisi'),
  gelar_pengajar: yup.string().required('Gelar Pengajar Wajib Diisi'),
  keahlian_pengajar: yup.string().required('Keahlian Pengajar Wajib Diisi'),
  pengalaman_pengajar: yup.string().required('Pengalaman Pengajar Wajib Diisi'),
  foto_pengajar: yup.string().optional(),
  sertifikat_pengajar: yup.string().optional(),
});
