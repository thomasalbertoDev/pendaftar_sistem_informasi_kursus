import { getById } from '../api';

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
    data: Kursus;
  };
}

export const requestGetKursusByID = async (id_kursus: string) => {
  try {
    const response: KursusResponse = await getById(id_kursus);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
