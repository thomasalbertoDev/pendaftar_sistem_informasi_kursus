import { getById } from '../api';

type Agama = {
  id_agama: string;
  nama_agama: string;
};

interface AgamaResponse {
  data: {
    data: Agama[];
  };
}

export const requestGetAgamaByID = async (id_agama: string) => {
  try {
    const response: AgamaResponse = await getById(id_agama);
    return response?.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
