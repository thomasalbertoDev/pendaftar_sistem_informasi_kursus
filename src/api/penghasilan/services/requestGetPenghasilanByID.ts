import { getById } from '../api';

interface Penghasilan {
  id_Penghasilan: string;
  jumlah_penghasilan: string;
}

interface PenghasilanResponse {
  data: {
    data: Penghasilan;
  };
}

export const requestGetPenghasilanByID = async (id_Penghasilan: string) => {
  try {
    const response: PenghasilanResponse = await getById(id_Penghasilan);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
