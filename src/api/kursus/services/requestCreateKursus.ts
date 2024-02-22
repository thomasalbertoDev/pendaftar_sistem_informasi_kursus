import { post } from '../api';
import ShowToast from '../../../helpers/ShowToast';

interface Kursus {
  nama_kursus: String;
  topik_kursus: String;
  jenjang_kursus: String;
  pengajar_ID: String;
  jam_mulai: String;
  jam_selesai: String;
  tanggal_mulai: String;
  tanggal_selesai: String;
  hari_kursus: String;
  harga_kursus: Number;
  foto_kursus: String;
  syarat_kursus: String;
  deskripsi_kursus: String;
  modul_kursus: String;
}

interface KursusResponse {
  status: number;
  data: {
    data: Kursus;
  };
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Kursus Berhasil Ditambahkan!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Kursus Gagal Ditambahkan!');
  return false;
};

const handleErrorConflict = (): boolean => {
  ShowToast('error', 'Kursus Sudah Ada!');
  return false;
};

export const requestCreateKursus = async (values: Kursus) => {
  try {
    const data: Kursus = {
      nama_kursus: values.nama_kursus,
      topik_kursus: values.topik_kursus,
      jenjang_kursus: values.jenjang_kursus,
      pengajar_ID: values.pengajar_ID,
      jam_mulai: values.jam_mulai,
      jam_selesai: values.jam_selesai,
      tanggal_mulai: values.tanggal_mulai,
      tanggal_selesai: values.tanggal_selesai,
      hari_kursus: values.hari_kursus,
      harga_kursus: values.harga_kursus,
      foto_kursus: values.foto_kursus,
      syarat_kursus: values.syarat_kursus,
      deskripsi_kursus: values.deskripsi_kursus,
      modul_kursus: values.modul_kursus,
    };
    const response: KursusResponse = await post(data);
    if (response.status === 201) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    if ((error as Error | any).response.status === 409) {
      return handleErrorConflict();
    } else {
      return handleError();
    }
  }
};
