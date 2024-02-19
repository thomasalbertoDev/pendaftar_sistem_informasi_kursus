import { updateProfileUser } from '../api';
import Swal from 'sweetalert2';
import ShowToast from '../../../helpers/ShowToast';

type User = {
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
};

interface DataUser {
  data: User;
}

interface UserResponse {
  status: number;
  data: DataUser;
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Profil Berhasil Diupdate!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Profil Gagal Diupdate!');
  return false;
};

export const requestUpdateProfilUser = async (id_users: string, data: DataUser) => {
  try {
    const alert = await Swal.fire({
      icon: 'warning',
      title: 'Apakah anda yakin?',
      text: 'Ingin mengupdate profile anda?',
      showCancelButton: true,
      confirmButtonText: 'Update',
      padding: '2em',
      customClass: 'sweet-alerts',
    });

    if (alert.isConfirmed) {
      const response: UserResponse = await updateProfileUser(id_users, data);
      if (response.status === 200) {
        return handleSuccess();
      }
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
