import Swal from 'sweetalert2';
import { put } from '../api';

export const requestPutSatuanBarang = async (id_satuan_barang: string, nama_satuan_barang: string) => {
  try {
    const data = { nama_satuan_barang };
    const response = await put(id_satuan_barang, data);

    if (response.status === 200) {
      const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: 'success',
        title: `Satuan Barang Berhasil Diedit!`,
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
      title: 'Satuan Barang Gagal Diedit!',
      padding: '10px 20px',
    });
  }
};
