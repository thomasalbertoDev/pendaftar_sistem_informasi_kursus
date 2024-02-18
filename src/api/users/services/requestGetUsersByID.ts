import { getUsersById } from '../api';

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
    data: Users;
  };
}

export const requestGetUsersByID = async (id_users: string) => {
  try {
    const response: UsersResponse = await getUsersById(id_users);
    return response?.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
