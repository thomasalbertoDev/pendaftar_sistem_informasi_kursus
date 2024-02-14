import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  nama_pekerjaan: yup.string().required('Nama Pekerjaan Wajib Diisi'),
});
