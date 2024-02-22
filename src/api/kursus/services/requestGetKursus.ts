import { get } from '../api';

interface Kursus {
  id_kursus: string;
  nama_kursus: string;
  topik_kursus: string;
  jenjang_kursus: string;
  pengajar_ID: string;
  jam_mulai: string;
  jam_selesai: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
  hari_kursus: string;
  harga_kursus: number;
  foto_kursus: string;
  syarat_kursus: string;
  deskripsi_kursus: string;
  modul_kursus: string;
}

interface KursusResponse {
  data: {
    data: Kursus[];
  };
}

export const requestGetKursus = async () => {
  try {
    const response: KursusResponse = await get();
    const kursus = response?.data?.data.map((item: Kursus, index: number) => ({ ...item, index }));
    return kursus;
  } catch (error) {
    console.log(error);
    return [];
  }
};
