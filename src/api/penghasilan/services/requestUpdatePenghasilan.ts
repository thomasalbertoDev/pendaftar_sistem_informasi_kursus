import { put } from '../api';
import ShowToast from '../../../helpers/ShowToast';

interface Penghasilan {
  jumlah_penghasilan: string;
}

interface PenghasilanResponse {
  status: number;
  data: {
    data: Penghasilan;
  };
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Penghasilan Berhasil Diedit!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Penghasilan Gagal Diedit!');
  return false;
};

export const requestUpdatePenghasilan = async (id_penghasilan: string, data: Penghasilan) => {
  try {
    const response: PenghasilanResponse = await put(id_penghasilan, data);
    if (response.status === 200) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
