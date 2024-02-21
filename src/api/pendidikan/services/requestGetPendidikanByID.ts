import { getById } from '../api';

interface Pendidikan {
  id_pendidikan: string;
  nama_pendidikan: string;
}

interface PendidikanResponse {
  data: {
    data: Pendidikan;
  };
}

export const requestGetPendidikanByID = async (id_pendidikan: string) => {
  try {
    const response: PendidikanResponse = await getById(id_pendidikan);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
