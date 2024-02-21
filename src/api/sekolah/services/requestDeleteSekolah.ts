import { remove } from '../api';
import Swal from 'sweetalert2';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = (): boolean => {
  ShowToast('success', 'Sekolah Berhasil Dihapus!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Sekolah Gagal Dihapus!');
  return false;
};

export const requestDeleteSekolah = async (id_sekolah: string) => {
  try {
    const alert = await Swal.fire({
      icon: 'warning',
      title: 'Apakah anda yakin?',
      text: 'Ingin menghapus data sekolah ini?',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      padding: '2em',
      customClass: 'sweet-alerts',
    });

    if (alert.isConfirmed) {
      await remove(id_sekolah);
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
