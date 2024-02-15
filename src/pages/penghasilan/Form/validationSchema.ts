import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  jumlah_penghasilan: yup.string().required('Jumlah Penghasilan Wajib Diisi'),
});
