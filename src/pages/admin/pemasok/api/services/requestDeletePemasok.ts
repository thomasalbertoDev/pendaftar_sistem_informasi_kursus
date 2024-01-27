import Swal from 'sweetalert2';
import { remove } from '../api';

export const requestDeletePemasok = async (id_pemasok: string) => {
  try {
    const alert = await Swal.fire({
      icon: 'warning',
      title: 'Apakah anda yakin?',
      text: 'Ingin menghapus pemasok ini?',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      padding: '2em',
      customClass: 'sweet-alerts',
    });

    if (alert.isConfirmed) {
      await remove(id_pemasok);
      const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: 'success',
        title: 'Pemasok Berhasil Dihapus!',
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
      title: 'Pemasok Gagal Dihapus!',
      padding: '10px 20px',
    });

    return false;
  }
};
