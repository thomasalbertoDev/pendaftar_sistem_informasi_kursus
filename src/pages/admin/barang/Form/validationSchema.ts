import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  kode_barang: yup.string().required('Kode Barang Wajib Diisi'),
  nama_barang: yup.string().required('Nama Barang Wajib Diisi'),
  id_kategori_barang: yup.string().required('Kategori Barang Wajib Diisi'),
  stok_barang: yup.number().required('Stok Barang Wajib Diisi'),
  id_satuan_barang: yup.string().required('Satuan Barang Wajib Diisi'),
  lokasi_barang: yup.string().required('Lokasi Barang Wajib Diisi'),
  id_pemasok: yup.string().required('Pemasok Wajib Diisi'),
  keterangan_barang: yup.string().required('Keterangan Barang Wajib Diisi'),
  foto_barang: yup.string().required('Foto Barang Wajib Diisi'),
});
