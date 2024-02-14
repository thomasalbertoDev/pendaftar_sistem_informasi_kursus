import { post } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Agama Berhasil Ditambahkan!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Agama Gagal Ditambahkan!');
  return false;
};

const handleErrorConflict = () => {
  ShowToast('error', 'Agama Sudah Ada!');
  return false;
};

export const requestCreateAgama = async (nama_agama: string) => {
  try {
    const data = { nama_agama };
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
