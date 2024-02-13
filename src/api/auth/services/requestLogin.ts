import Swal from 'sweetalert2';
import auth from '../../../configs/auth';
import { login } from '../api';

export const requestLogin = async (username: string, password: string) => {
  try {
    const data = { username, password };
    const response = await login(data);

    if (response.status === 200) {
      const { data } = response;
      const token = data?.data?.token;
      const username = data?.data?.username;
      const nama = data?.data?.nama;
      const role = data?.data?.role;

      auth.setToken(token);
      auth.setUsername(username);
      auth.setNama(nama);
      auth.setRole(role);

      const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: 'success',
        title: `Selamat Datang ${username}`,
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
      title: 'Username atau Password Salah',
      padding: '10px 20px',
    });

    return false;
  }
};
