import { put } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Agama Berhasil Diedit!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Agama Gagal Diedit!');
  return false;
};

export const requestUpdateAgama = async (id_agama: string, nama_agama: string) => {
  try {
    const data = { nama_agama };
    const response = await put(id_agama, data);

    if (response.status === 200) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
