import { put } from '../api';
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
  ShowToast('success', 'Pendidikan Berhasil Diedit!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Pendidikan Gagal Diedit!');
  return false;
};

export const requestUpdatePendidikan = async (id_pendidikan: string, data: Pendidikan) => {
  try {
    const response: PendidikanResponse = await put(id_pendidikan, data);
    if (response.status === 200) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
