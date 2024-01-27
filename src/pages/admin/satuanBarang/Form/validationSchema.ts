import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  nama_satuan_barang: yup.string().required('Satuan Barang Wajib Diisi'),
});
