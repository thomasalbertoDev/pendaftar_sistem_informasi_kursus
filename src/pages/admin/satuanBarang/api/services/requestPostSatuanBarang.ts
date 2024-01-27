import Swal from 'sweetalert2';
import { post } from '../api';

export const requestPostSatuanBarang = async (nama_satuan_barang: string): Promise<any> => {
  try {
    const data = { nama_satuan_barang };
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
        title: `Satuan Barang Berhasil Ditambahkan!`,
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
      title: 'Satuan Barang Gagal Ditambahkan!',
      padding: '10px 20px',
    });

    return false;
  }
};
