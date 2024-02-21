import { post } from '../api';
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
  ShowToast('success', 'Penghasilan Berhasil Ditambahkan!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Penghasilan Gagal Ditambahkan!');
  return false;
};

const handleErrorConflict = (): boolean => {
  ShowToast('error', 'Penghasilan Sudah Ada!');
  return false;
};

export const requestCreatePenghasilan = async (data: Penghasilan) => {
  try {
    const response: PenghasilanResponse = await post(data);
    if (response.status === 201) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    if ((error as any).response.status === 409) {
      return handleErrorConflict();
    } else {
      return handleError();
    }
  }
};
