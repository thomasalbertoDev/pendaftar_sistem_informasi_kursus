import { put } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Pendidikan Berhasil Diedit!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Pendidikan Gagal Diedit!');
  return false;
};

export const requestUpdatePendidikan = async (id_pendidikan: string, nama_pendidikan: string) => {
  try {
    const data = { nama_pendidikan };
    const response = await put(id_pendidikan, data);
    if (response.status === 200) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
