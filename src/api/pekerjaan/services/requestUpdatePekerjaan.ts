import { put } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Pekerjaan Berhasil Diedit!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Pekerjaan Gagal Diedit!');
  return false;
};

export const requestUpdatePekerjaan = async (id_pekerjaan: string, nama_pekerjaan: string) => {
  try {
    const data = { nama_pekerjaan };
    const response = await put(id_pekerjaan, data);

    if (response.status === 200) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
