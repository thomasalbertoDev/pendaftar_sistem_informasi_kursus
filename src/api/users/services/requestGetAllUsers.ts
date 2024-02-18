import { getAllUsers } from '../api';

type Users = {
  nama: string;
  email: string;
  username: string;
  role: string;
  verifikasi_email: boolean;
  tanggal_verifikasi_email: string;
  foto_profile: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  no_telepon: string;
  alamat: string;
  instagram: string;
  whatsapp: string;
};

interface UsersResponse {
  data: {
    data: Users[];
  };
}

export const requestGetAllUsers = async (): Promise<Users[]> => {
  try {
    const response: UsersResponse = await getAllUsers();
    const users = response?.data?.data.map((item: Users, index: number) => ({ ...item, index }));
    return users || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
