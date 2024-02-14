import { remove } from '../api';
import Swal from 'sweetalert2';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Agama Berhasil Dihapus!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Agama Gagal Dihapus!');
  return false;
};

export const requestDeleteAgama = async (id_agama: string) => {
  try {
    const alert = await Swal.fire({
      icon: 'warning',
      title: 'Apakah anda yakin?',
      text: 'Ingin menghapus agama ini?',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      padding: '2em',
      customClass: 'sweet-alerts',
    });

    if (alert.isConfirmed) {
      await remove(id_agama);
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
