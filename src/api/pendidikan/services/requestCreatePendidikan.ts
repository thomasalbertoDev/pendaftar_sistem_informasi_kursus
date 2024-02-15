import { post } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Pendidikan Berhasil Ditambahkan!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Pendidikan Gagal Ditambahkan!');
  return false;
};

const handleErrorConflict = () => {
  ShowToast('error', 'Pendidikan Sudah Ada!');
  return false;
};

export const requestCreatePendidikan = async (nama_pendidikan: string) => {
  try {
    const data = { nama_pendidikan };
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
