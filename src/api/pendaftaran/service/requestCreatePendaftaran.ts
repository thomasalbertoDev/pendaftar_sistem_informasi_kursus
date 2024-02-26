import ShowToast from '../../../helpers/ShowToast';
import { post } from '../api';

interface Pendaftaran {
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

interface PendaftaranResponse {
  status: number;
  data: {
    data: Pendaftaran;
  };
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Berhasil Melakukan Pendaftran!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Gagal Melakukan Pendaftaran!');
  return false;
};

const handleErrorConflict = (): boolean => {
  ShowToast('error', 'Pendaftaran Sudah Dilakukan!');
  return false;
};

export const requestCreatePendaftaran = async (data: Pendaftaran) => {
  try {
    const response: PendaftaranResponse = await post(data);
    if (response.status === 201) {
      return handleSuccess();
    }
  } catch (error) {
    if ((error as any).response.status === 409) {
      return handleErrorConflict();
    } else {
      return handleError();
    }
  }
};
