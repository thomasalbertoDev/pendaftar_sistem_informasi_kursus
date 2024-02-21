import { post } from '../api';
import ShowToast from '../../../helpers/ShowToast';

interface Pendidikan {
  nama_pendidikan: string;
}

interface PendidikanResponse {
  status: number;
  data: {
    data: Pendidikan;
  };
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Pendidikan Berhasil Ditambahkan!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Pendidikan Gagal Ditambahkan!');
  return false;
};

const handleErrorConflict = (): boolean => {
  ShowToast('error', 'Pendidikan Sudah Ada!');
  return false;
};

export const requestCreatePendidikan = async (values: Pendidikan) => {
  try {
    const data: Pendidikan = { nama_pendidikan: values.nama_pendidikan };
    const response: PendidikanResponse = await post(data);
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
