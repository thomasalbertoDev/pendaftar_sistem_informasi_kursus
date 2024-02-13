import Swal from 'sweetalert2';
import auth from '../../../configs/auth';
import { logout } from '../api';

export const requestLogout = async () => {
  try {
    const response = await logout();
    if (response.status === 200) {
      auth.removeToken();
      auth.removeUsername();
      auth.removeNama();
      auth.removeRole();

      const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: 'success',
        title: 'Anda Berhasil Logout!',
        padding: '10px 20px',
      });

      return true;
    }
  } catch (error) {
    console.log(error);
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: 'error',
      title: 'Anda Gagal Logout!',
      padding: '10px 20px',
    });

    return false;
  }
};
