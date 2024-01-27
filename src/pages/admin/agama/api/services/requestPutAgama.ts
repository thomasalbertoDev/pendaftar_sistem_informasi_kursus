import Swal from 'sweetalert2';
import { put } from '../api';


export const requestPutAgama = async (id_agama: string, nama_agama: string) => {
  try {
    const data = { nama_agama };
    const response = await put(id_agama, data);

    if (response.status === 200) {
      const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: 'success',
        title: `Agama Berhasil Diedit!`,
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
      title: 'Agama Gagal Diedit!',
      padding: '10px 20px',
    });

    return false;
  }
};
