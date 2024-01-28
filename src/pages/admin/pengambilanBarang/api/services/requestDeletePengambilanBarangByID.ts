import Swal from 'sweetalert2';
import { removeById } from '../api';

export const requestDeletePengambilanBarangByID = async (id_pengambilan_barang: string): Promise<any> => {
  try {
    const alert = await Swal.fire({
      icon: 'warning',
      title: 'Apakah anda yakin?',
      text: 'Ingin membatalkan pengambilan barang ini?',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      padding: '2em',
      customClass: 'sweet-alerts',
    });

    if (alert.isConfirmed) {
      await removeById(id_pengambilan_barang);
      const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: 'success',
        title: 'Pengambilan Barang Berhasil Dibatalkan!',
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
      title: 'Pengambilan Barang Gagal Dibatalkan!',
      padding: '10px 20px',
    });

    return false;
  }
};
