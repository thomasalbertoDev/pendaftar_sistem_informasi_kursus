import Swal from 'sweetalert2';
import { remove } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Pendidikan Berhasil Dihapus!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Pendidikan Gagal Dihapus!');
  return false;
};

export const requestDeletePendidikan = async (id_pendidikan: string) => {
  try {
    const alert = await Swal.fire({
      icon: 'warning',
      title: 'Apakah anda yakin?',
      text: 'Ingin menghapus pendidikan ini?',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      padding: '2em',
      customClass: 'sweet-alerts',
    });

    if (alert.isConfirmed) {
      await remove(id_pendidikan);
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
