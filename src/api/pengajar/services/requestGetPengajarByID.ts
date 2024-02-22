import { getById } from '../api';

interface Pengajar {
  id_pengajar: string;
  nama_pengajar: string;
  no_telepon_pengajar: string;
  gelar_pengajar: string;
  keahlian_pengajar: string;
  pengalaman_pengajar: string;
  foto_pengajar: string;
  sertifikat_pengajar: string;
}

interface PengajarResponse {
  data: {
    data: Pengajar;
  };
}

export const requestGetPengajarByID = async (id_pengajar: string) => {
  try {
    const response: PengajarResponse = await getById(id_pengajar);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
