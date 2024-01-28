import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  tanggal_barang_masuk: yup.string().required('Tanggal Barang Masuk Wajib Diisi'),
  id_barang: yup.string().required('Barang Wajib Diisi'),
  jumlah_barang_masuk: yup.number().required('Jumlah Barang Masuk Wajib Diisi'),
});
