import { put } from '../api';
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
  ShowToast('success', 'Sekolah Berhasil Diupdate!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Sekolah Gagal Diupdate!');
  return false;
};

export const requestUpdateSekolah = async (id_sekolah: string, data: Sekolah) => {
  try {
    const response: SekolahResponse = await put(id_sekolah, data);
    if (response.status === 200) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
