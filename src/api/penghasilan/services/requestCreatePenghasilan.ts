import { post } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Penghasilan Berhasil Ditambahkan!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Penghasilan Gagal Ditambahkan!');
  return false;
};

const handleErrorConflict = () => {
  ShowToast('error', 'Penghasilan Sudah Ada!');
  return false;
};

export const requestCreatePenghasilan = async (jumlah_penghasilan: string) => {
  try {
    const data = { jumlah_penghasilan };
    const response = await post(data);
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
