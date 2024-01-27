import Swal from 'sweetalert2';
import { put } from '../api';

export const requestPutPemasok = async (id_pemasok: string, data: any) => {
  try {
    const response = await put(id_pemasok, data);
    if (response.status === 200) {
      const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: 'success',
        title: `Pemasok Berhasil Diubah!`,
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
      title: 'Pemasok Gagal Diubah!',
      padding: '10px 20px',
    });

    return false;
  }
};
