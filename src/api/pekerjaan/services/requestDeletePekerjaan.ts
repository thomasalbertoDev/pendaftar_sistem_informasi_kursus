import Swal from 'sweetalert2';
import { remove } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = (): boolean => {
  ShowToast('success', 'Pekerjaan Berhasil Dihapus!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Pekerjaan Gagal Dihapus!');
  return false;
};

export const requestDeletePekerjaan = async (id_pekerjaan: string) => {
  try {
    const alert = await Swal.fire({
      icon: 'warning',
      title: 'Apakah anda yakin?',
      text: 'Ingin menghapus pekerjaan ini?',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      padding: '2em',
      customClass: 'sweet-alerts',
    });

    if (alert.isConfirmed) {
      await remove(id_pekerjaan);
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
