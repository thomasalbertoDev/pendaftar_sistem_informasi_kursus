import { put } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Penghasilan Berhasil Diedit!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Penghasilan Gagal Diedit!');
  return false;
};

export const requestUpdatePenghasilan = async (id_penghasilan: string, jumlah_penghasilan: string) => {
  try {
    const data = { jumlah_penghasilan };
    const response = await put(id_penghasilan, data);

    if (response.status === 200) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
