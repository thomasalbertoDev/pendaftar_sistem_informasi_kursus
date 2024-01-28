import Swal from 'sweetalert2';
import { put } from '../api';

export const requestPutBarang = async (id_barang: string, data: any) => {
  try {
    const response = await put(id_barang, data);
    if (response.status === 200) {
      const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: 'success',
        title: `Barang Berhasil Diubah!`,
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
      title: 'Barang Gagal Diubah!',
      padding: '10px 20px',
    });

    return false;
  }
};
