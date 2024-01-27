import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  nama_karyawan: yup.string().required('Nama Karyawan Wajib Diisi'),
  jenis_kelamin: yup.string().required('Jenis Kelamin Wajib Diisi'),
  tempat_lahir: yup.string().required('Tempat Lahir Wajib Diisi'),
  tanggal_lahir: yup.string().required('Tanggal Lahir Wajib Diisi'),
  tanggal_masuk: yup.string().required('Tanggal Masuk Wajib Diisi'),
  id_agama: yup.string().required('Agama Wajib Diisi'),
  no_telp: yup.string().required('No. Telp Wajib Diisi'),
  alamat: yup.string().required('Alamat Wajib Diisi'),
  foto_karyawan: yup.string().required('Foto Karyawan Wajib Diisi'),
});
