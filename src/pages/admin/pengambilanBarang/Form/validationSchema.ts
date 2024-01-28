import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  tanggal_pengambilan: yup.string().required('Tanggal Pengambilan Wajib Diisi'),
  id_barang: yup.string().required('Barang Wajib Diisi'),
  id_karyawan: yup.string().required('Karyawan Wajib Diisi'),
  jumlah_pengambilan_barang: yup.string().required('Jumlah Pengambilan Barang Wajib Diisi'),
});
