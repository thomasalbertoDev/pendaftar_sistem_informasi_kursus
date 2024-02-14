import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  nama: yup.string().required('Nama Wajib Diisi'),
  foto_profil: yup.string().required('Foto Wajib Diisi'),
  tempat_lahir: yup.string().required('Tempat Lahir Wajib Diisi'),
  tanggal_lahir: yup.string().required('Tanggal Lahir Wajib Diisi'),
  jenis_kelamin: yup.string().required('Jenis Kelamin Wajib Dipilih'),
  no_telepon: yup.string().required('No Telepon Wajib Diisi'),
  alamat: yup.string().required('Alamat Wajib Diisi'),
  instagram: yup.string().required('Instagram Wajib Diisi'),
  whatsapp: yup.string().required('No Whatsapp Wajib Diisi'),
});
