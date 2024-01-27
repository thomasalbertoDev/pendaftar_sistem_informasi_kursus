import Swal from 'sweetalert2';
import { put } from '../api';

export const requestPutKategoriBarang = async (id_kategori_barang: string, nama_kategori_barang: string) => {
  try {
    const data = { nama_kategori_barang };
    const response = await put(id_kategori_barang, data);

    if (response.status === 200) {
      const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: 'success',
        title: `Kategori Barang Berhasil Diedit!`,
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
      title: 'Kategori Barang Gagal Diedit!',
      padding: '10px 20px',
    });

    return false;
  }
};
