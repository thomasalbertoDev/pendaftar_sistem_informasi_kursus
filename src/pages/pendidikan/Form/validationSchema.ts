import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  nama_pendidikan: yup.string().required('Nama Pendidikan Wajib Diisi'),
});
