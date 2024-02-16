import { post } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Sekolah Berhasil Ditambahkan!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Sekolah Gagal Ditambahkan!');
  return false;
};

const handleErrorConflict = () => {
  ShowToast('error', 'Sekolah Sudah Ada!');
  return false;
};

export const requestCreateSekolah = async (
  npsn: number,
  nama_sekolah: string,
  alamat: string,
  kode_pos: number,
  provinsi: string,
  kabupaten: string,
  kecamatan: string,
  kelurahan: string,
  status_sekolah: string,
  jenjang_pendidikan: string,
  akreditasi: string,
  email_sekolah: string,
  no_telepon_sekolah: string
) => {
  try {
    const data = {
      npsn,
      nama_sekolah,
      alamat,
      kode_pos,
      provinsi,
      kabupaten,
      kecamatan,
      kelurahan,
      status_sekolah,
      jenjang_pendidikan,
      akreditasi,
      email_sekolah,
      no_telepon_sekolah,
    };

    const response = await post(data);
    if (response.status === 201) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    if ((error as any).response.status === 409) {
      return handleErrorConflict();
    } else {
      return handleError();
    }
  }
};
