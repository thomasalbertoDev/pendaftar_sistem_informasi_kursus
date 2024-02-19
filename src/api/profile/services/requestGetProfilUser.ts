import { getProfileUser } from '../api';

interface User {
  [x: string]: any;
  id_users: string;
  nama: string;
  email: string;
  username: string;
  role: string;
  verifikasi_email: boolean;
  tanggal_verifikasi_email: string;
  foto_profil: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  no_telepon: string;
  alamat: string;
  instagram: string;
  whatsapp: string;
}

export const requestGetProfilUser = async (): Promise<User | undefined> => {
  try {
    const response: User = await getProfileUser();
    const user = response.data;
    return user;
  } catch (error) {
    console.log(error);
  }
};
