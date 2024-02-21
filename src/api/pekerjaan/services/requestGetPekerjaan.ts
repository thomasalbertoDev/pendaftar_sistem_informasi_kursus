import { get } from '../api';

interface Pekerjaan {
  id_pekerjaan: string;
  nama_pekerjaan: string;
}

interface PekerjaanResponse {
  status: number;
  data: {
    data: Pekerjaan[];
  };
}

export const requestGetPekerjaan = async (): Promise<Pekerjaan[]> => {
  try {
    const response: PekerjaanResponse = await get();
    const pekerjaan = response?.data?.data.map((item: any, index: number) => ({ ...item, index }));
    return pekerjaan || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
