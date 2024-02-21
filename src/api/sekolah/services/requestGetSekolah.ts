import { get } from '../api';

interface Sekolah {
  id_sekolah: string;
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
    data: Sekolah[];
  };
}

export const requestGetSekolah = async () => {
  try {
    const response: SekolahResponse = await get();
    const sekolah = response?.data?.data.map((item: any, index: number) => ({ ...item, index }));
    return sekolah;
  } catch (error) {
    console.log(error);
    return [];
  }
};
