import ShowToast from '../../../helpers/ShowToast';
import { put } from '../api';

const handleSuccess = () => {
  ShowToast('success', 'Sekolah Berhasil Diupdate!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Sekolah Gagal Diupdate!');
  return false;
};

export const requestUpdateSekolah = async (id_sekolah: string, data: any) => {
  try {
    const response = await put(id_sekolah, data);
    if (response.status === 200) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
