import { get } from '../api';

type Pengajar = {
  id_pengajar: string;
  nama_pengajar: string;
  no_telepon_pengajar: string;
  gelar_pengajar: string;
  keahlian_pengajar: string;
  pengalaman_pengajar: string;
  foto_pengajar: string;
  sertifikat_pengajar: string;
};

interface PengajarResponse {
  data: {
    data: Pengajar[];
  };
}

export const requestGetPengajar = async (): Promise<Pengajar[]> => {
  try {
    const response: PengajarResponse = await get();
    const pengajar = response?.data?.data.map((item: Pengajar, index: number) => ({ ...item, index }));
    return pengajar || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
