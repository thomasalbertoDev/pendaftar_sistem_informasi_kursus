import { put } from '../api';
import ShowToast from '../../../helpers/ShowToast';

interface Kursus {
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
  status: number;
  data: {
    data: Kursus;
  };
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Kursus Berhasil Diupdate!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Kursus Gagal Diupdate!');
  return false;
};

export const requestUpdateKursus = async (id_kursus: string, data: Kursus) => {
  try {
    const response: KursusResponse = await put(id_kursus, data);
    if (response.status === 200) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
