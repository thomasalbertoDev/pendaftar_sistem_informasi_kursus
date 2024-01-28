import Swal from 'sweetalert2';
import { post } from '../api';

export const requestPostPengambilanBarang = async (tanggal_pengambilan_barang: string, id_barang: string, id_karyawan: string, jumlah_pengambilan_barang: number): Promise<any> => {
  try {
    const data = {
      tanggal_pengambilan_barang,
      id_barang,
      id_karyawan,
      jumlah_pengambilan_barang,
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
        title: `Pengambilan Barang Berhasil Ditambahkan!`,
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
      title: 'Pengambilan Barang Gagal Ditambahkan!',
      padding: '10px 20px',
    });

    return false;
  }
};
