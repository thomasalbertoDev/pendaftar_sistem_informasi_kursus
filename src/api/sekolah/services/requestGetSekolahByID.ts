import { getById } from '../api';

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

export const requestGetSekolahByID = async (id_sekolah: string) => {
  try {
    const response: SekolahResponse = await getById(id_sekolah);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
