import { get } from '../api';

interface Pendidikan {
  id_pendidikan: string;
  nama_pendidikan: string;
}

interface PendidikanResponse {
  status: number;
  data: {
    data: Pendidikan[];
  };
}

export const requestGetPendidikan = async () => {
  try {
    const response: PendidikanResponse = await get();
    const pendidikan = response?.data?.data.map((item: any, index: number) => ({ ...item, index }));
    return pendidikan;
  } catch (error) {
    console.log(error);
    return [];
  }
};
