import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  bukti_pembayaran: yup.string().required('Bukti Pembayaran Harus Diupload'),
});
