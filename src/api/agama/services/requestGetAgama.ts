import { get } from '../api';

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

export const requestGetAgama = async (): Promise<Agama[]> => {
  try {
    const response: AgamaResponse = await get();
    const agama = response?.data?.data.map((item: Agama, index: number) => ({ ...item, index }));
    return agama || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
