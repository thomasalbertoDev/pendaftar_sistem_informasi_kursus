import { put } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Pengajar Berhasil Diupdate!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Pengajar Gagal Diupdate!');
  return false;
};

type Pengajar = {
  nama_pengajar: string;
  no_telepon_pengajar: string;
  gelar_pengajar: string;
  keahlian_pengajar: string;
  pengalaman_pengajar: string;
  foto_pengajar: string;
  sertifikat_pengajar: string;
};

interface PengajarResponse {
  status: number;
  data: {
    data: Pengajar[];
  };
}

export const requestUpdatePengajar = async (id_pengajar: string, data: Pengajar) => {
  try {
    const response: PengajarResponse = await put(id_pengajar, data);
    if (response.status === 200) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
