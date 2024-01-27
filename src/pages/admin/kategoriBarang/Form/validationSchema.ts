import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  nama_kategori_barang: yup.string().required('Kategori Barang Wajib Diisi'),
});
