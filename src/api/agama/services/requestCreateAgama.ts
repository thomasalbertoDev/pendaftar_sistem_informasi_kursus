import { post } from '../api';
import ShowToast from '../../../helpers/ShowToast';

type Agama = {
  nama_agama: string;
};

interface AgamaResponse {
  status: number;
  data: {
    data: Agama[];
  };
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Agama Berhasil Ditambahkan!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Agama Gagal Ditambahkan!');
  return false;
};

const handleErrorConflict = (): boolean => {
  ShowToast('error', 'Agama Sudah Ada!');
  return false;
};

export const requestCreateAgama = async (values: Agama) => {
  try {
    const data: Agama = { nama_agama: values.nama_agama };
    const response: AgamaResponse = await post(data);
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
