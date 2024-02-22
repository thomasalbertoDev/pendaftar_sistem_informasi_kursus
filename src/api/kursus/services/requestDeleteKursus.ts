import { remove } from '../api';
import Swal from 'sweetalert2';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = (): boolean => {
  ShowToast('success', 'Kursus Berhasil Dihapus!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Kursus Gagal Dihapus!');
  return false;
};

export const requestDeleteKursus = async (id_kursus: string) => {
  try {
    const alert = await Swal.fire({
      icon: 'warning',
      title: 'Apakah anda yakin?',
      text: 'Ingin menghapus data kursus ini?',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      padding: '2em',
      customClass: 'sweet-alerts',
    });

    if (alert.isConfirmed) {
      await remove(id_kursus);
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
