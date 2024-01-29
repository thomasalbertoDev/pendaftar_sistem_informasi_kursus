import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  nama_admin: yup.string().required('Nama Wajib Diisi'),
  foto_admin: yup.string().required('Foto Wajib Diisi'),
});
