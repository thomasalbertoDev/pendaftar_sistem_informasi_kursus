import { post } from '../api';
import ShowToast from '../../../helpers/ShowToast';

interface Sekolah {
  npsn: number;
  nama_sekolah: string;
  alamat: string;
  kode_pos: number;
  provinsi: string;
  kabupaten: string;
  kecamatan: string;
  kelurahan: string;
  status_sekolah: string;
  jenjang_pendidikan: string;
  akreditasi: string;
  email_sekolah: string;
  no_telepon_sekolah: string;
}

interface SekolahResponse {
  status: number;
  data: {
    data: Sekolah;
  };
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Sekolah Berhasil Ditambahkan!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Sekolah Gagal Ditambahkan!');
  return false;
};

const handleErrorConflict = (): boolean => {
  ShowToast('error', 'Sekolah Sudah Ada!');
  return false;
};

export const requestCreateSekolah = async (data: Sekolah) => {
  try {
    const response: SekolahResponse = await post(data);
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
