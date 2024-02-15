import Swal from 'sweetalert2';
import { remove } from '../api';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Penghasilan Berhasil Dihapus!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Penghasilan Gagal Dihapus!');
  return false;
};

export const requestDeletePenghasilan = async (id_penghasilan: string) => {
  try {
    const alert = await Swal.fire({
      icon: 'warning',
      title: 'Apakah anda yakin?',
      text: 'Ingin menghapus penghasilan ini?',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      padding: '2em',
      customClass: 'sweet-alerts',
    });

    if (alert.isConfirmed) {
      await remove(id_penghasilan);
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
