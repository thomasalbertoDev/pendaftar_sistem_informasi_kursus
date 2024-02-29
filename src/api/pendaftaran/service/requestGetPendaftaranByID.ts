import { getById } from '../api';

interface PendaftarKursus {
  kursus_ID: string;
  nisn: number;
  nis: number;
  nik: number;
  nama_lengkap: string;
  jenis_kelamin: string;
  pas_foto: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  agama_ID: string;
  email: string;
  no_telepon: string;
  alamat: string;
  nama_ayah: string;
  pekerjaan_ayah_ID: string;
  no_telepon_ayah: string;
  pendidikan_ayah_ID: string;
  penghasilan_ayah_ID: string;
  nama_ibu: string;
  pekerjaan_ibu_ID: string;
  no_telepon_ibu: string;
  pendidikan_ibu_ID: string;
  penghasilan_ibu_ID: string;
  slip_gaji_ayah_ibu: string;
  foto_kk: string;
  sekolah_ID: string;
  nilai_semester_1: number;
  nilai_semester_2: number;
  nilai_semester_3: number;
  nilai_semester_4: number;
  nilai_semester_5?: number;
  nilai_semester_6?: number;
  raport: string;
  prestasi?: string;
}

interface PendaftarKursusResponse {
  status: number;
  data: {
    data: PendaftarKursus;
  };
}

export const requestGetPendaftaranByID = async (id_pendaftaran: string) => {
  try {
    const response: PendaftarKursusResponse = await getById(id_pendaftaran);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
