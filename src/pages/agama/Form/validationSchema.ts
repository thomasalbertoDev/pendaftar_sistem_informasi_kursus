import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  nama_agama: yup.string().required('Nama Agama Wajib Diisi'),
});
