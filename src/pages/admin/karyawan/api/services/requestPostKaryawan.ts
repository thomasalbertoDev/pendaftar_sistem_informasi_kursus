import Swal from 'sweetalert2';
import { post } from '../api';

export const requestPostKaryawan = async (
  nama_karyawan: string,
  jenis_kelamin: string,
  tempat_lahir: string,
  tanggal_lahir: string,
  tanggal_masuk: string,
  id_agama: string,
  alamat: string,
  no_telp: string,
  foto_karyawan: string
): Promise<any> => {
  try {
    const data = {
      nama_karyawan,
      jenis_kelamin,
      tempat_lahir,
      tanggal_lahir,
      tanggal_masuk,
      id_agama,
      alamat,
      no_telp,
      foto_karyawan,
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
        title: `Karyawan Berhasil Ditambahkan!`,
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
      title: 'Karyawan Gagal Ditambahkan!',
      padding: '10px 20px',
    });

    return false;
  }
};
