import { get } from '../api';

interface Penghasilan {
  id_penghasilan: string;
  nama_penghasilan: string;
}

interface PenghasilanResponse {
  status: number;
  data: {
    data: Penghasilan[];
  };
}

export const requestGetPenghasilan = async () => {
  try {
    const response: PenghasilanResponse = await get();
    const penghasilan = response?.data?.data.map((item: any, index: number) => ({ ...item, index }));
    return penghasilan;
  } catch (error) {
    console.log(error);
    return [];
  }
};
