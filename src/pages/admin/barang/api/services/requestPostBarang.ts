import Swal from 'sweetalert2';
import { post } from '../api';

export const requestPostBarang = async (
  kode_barang: string,
  nama_barang: string,
  id_kategori_barang: string,
  stok_barang: number,
  id_satuan_barang: string,
  lokasi_barang: string,
  id_pemasok: string,
  keterangan_barang: string,
  foto_barang: string
) => {
  try {
    const data = {
      kode_barang,
      nama_barang,
      id_kategori_barang,
      stok_barang,
      id_satuan_barang,
      lokasi_barang,
      id_pemasok,
      keterangan_barang,
      foto_barang,
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
        title: `Barang Berhasil Ditambahkan!`,
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
      title: 'Barang Gagal Ditambahkan!',
      padding: '10px 20px',
    });

    return false;
  }
};
