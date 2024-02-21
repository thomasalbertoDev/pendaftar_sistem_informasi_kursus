import { getById } from '../api';

interface Pekerjaan {
  id_pekerjaan: string;
  nama_pekerjaan: string;
}

interface PekerjaanResponse {
  data: {
    data: Pekerjaan;
  };
}

export const requestGetPekerjaanByID = async (id_pekerjaan: string) => {
  try {
    const response: PekerjaanResponse = await getById(id_pekerjaan);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
