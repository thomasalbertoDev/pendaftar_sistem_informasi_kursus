import Swal from 'sweetalert2';
import { post } from '../api';

export const requestPostPemasok = async (nama_pemasok: string, nama_kontak_pemasok: string, no_telp_pemasok: string, alamat_pemasok: string): Promise<any> => {
  try {
    const data = {
      nama_pemasok,
      nama_kontak_pemasok,
      no_telp_pemasok,
      alamat_pemasok,
    };
    const response = await post(data);
    if (response.status === 201) {
      const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: 'success',
        title: `Pemasok Berhasil Ditambahkan!`,
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
      title: 'Pemasok Gagal Ditambahkan!',
      padding: '10px 20px',
    });

    return false;
  }
};
