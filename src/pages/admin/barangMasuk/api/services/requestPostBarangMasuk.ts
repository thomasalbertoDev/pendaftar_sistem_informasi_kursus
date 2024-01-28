import Swal from 'sweetalert2';
import { post } from '../api';

export const requestPostBarangMasuk = async (tanggal_barang_masuk: string, id_barang: string, jumlah_barang_masuk: number): Promise<any> => {
  try {
    const data = {
      tanggal_barang_masuk,
      id_barang,
      jumlah_barang_masuk,
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
        title: `Barang Masuk Berhasil Ditambahkan!`,
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
      title: 'Barang Masuk Gagal Ditambahkan!',
      padding: '10px 20px',
    });

    return false;
  }
};
