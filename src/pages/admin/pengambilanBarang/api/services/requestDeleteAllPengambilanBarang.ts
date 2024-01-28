import Swal from 'sweetalert2';
import { removeAll } from '../api';

export const requestDeleteAllPengambilanBarang = async (): Promise<any> => {
  try {
    const alert = await Swal.fire({
      icon: 'warning',
      title: 'Apakah anda yakin?',
      text: 'Ingin menyimpan pengambilan barang ini ke laporan?',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      padding: '2em',
      customClass: 'sweet-alerts',
    });

    if (alert.isConfirmed) {
      await removeAll();
      const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: 'success',
        title: 'Pengambilan Barang Berhasil Dimasukkan Ke Laporan!',
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
      title: 'Pengambilan Barang Gagal Dimasukkan Ke Laporan!',
      padding: '10px 20px',
    });

    return false;
  }
};
