import { post } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Pekerjaan Berhasil Ditambahkan!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Pekerjaan Gagal Ditambahkan!');
  return false;
};

const handleErrorConflict = () => {
  ShowToast('error', 'Pekerjaan Sudah Ada!');
  return false;
};

export const requestCreatePekerjaan = async (nama_pekerjaan: string) => {
  try {
    const data = { nama_pekerjaan };
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
