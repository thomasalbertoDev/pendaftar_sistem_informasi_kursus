import ShowToast from '../../../helpers/ShowToast';
import { put } from '../api';

interface Pendaftaran {
  id_pendaftaran: string;
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
  ShowToast('success', 'Data Pendaftaran Berhasil Diupdate!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Data Pendaftaran Gagal Diupdate!');
  return false;
};

export const requestUpdatePendaftaran = async (id_pendaftaran: string, data: Pendaftaran) => {
  try {
    const response: PendaftaranResponse = await put(id_pendaftaran, data);
    if (response.status === 200) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
