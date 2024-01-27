import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  nama_pemasok: yup.string().required('Nama Pemasok Wajib Diisi'),
  nama_kontak_pemasok: yup.string().required('Nama Kontak Pemasok Wajib Diisi'),
  no_telp_pemasok: yup.string().required('No. Telp Pemasok Wajib Diisi'),
  alamat_pemasok: yup.string().required('Alamat Pemasok Wajib Diisi'),
});
