import { put } from '../api';
import ShowToast from '../../../helpers/ShowToast';

type Agama = {
  id_agama: string;
  nama_agama: string;
};

interface AgamaResponse {
  status: number;
  data: {
    data: Agama[];
  };
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Agama Berhasil Diupdate!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Agama Gagal Diupdate!');
  return false;
};

export const requestUpdateAgama = async (id_agama: string, data: Agama) => {
  try {
    const response: AgamaResponse = await put(id_agama, data);
    if (response.status === 200) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
