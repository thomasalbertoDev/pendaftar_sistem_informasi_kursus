import { put } from '../api';
import ShowToast from '../../../helpers/ShowToast';

interface Pekerjaan {
  nama_pekerjaan: string;
}

interface PekerjaanResponse {
  status: number;
  data: {
    data: Pekerjaan;
  };
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Pekerjaan Berhasil Diedit!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Pekerjaan Gagal Diedit!');
  return false;
};

export const requestUpdatePekerjaan = async (id_pekerjaan: string, data: Pekerjaan) => {
  try {
    const response: PekerjaanResponse = await put(id_pekerjaan, data);
    if (response.status === 200) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
