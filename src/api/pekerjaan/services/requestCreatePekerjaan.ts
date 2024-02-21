import { post } from '../api';
import ShowToast from '../../../helpers/ShowToast';

interface Pekerjaan {
  nama_pekerjaan: string;
}

interface PekerjaanResponse {
  status: number;
  data: {
    data: Pekerjaan;
  };
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Pekerjaan Berhasil Ditambahkan!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Pekerjaan Gagal Ditambahkan!');
  return false;
};

const handleErrorConflict = (): boolean => {
  ShowToast('error', 'Pekerjaan Sudah Ada!');
  return false;
};

export const requestCreatePekerjaan = async (values: Pekerjaan) => {
  try {
    const data: Pekerjaan = { nama_pekerjaan: values.nama_pekerjaan };
    const response: PekerjaanResponse = await post(data);
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
