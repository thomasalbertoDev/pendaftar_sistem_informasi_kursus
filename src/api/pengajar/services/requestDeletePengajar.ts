import { remove } from '../api';
import Swal from 'sweetalert2';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = () => {
  ShowToast('success', 'Pengajar Berhasil Dihapus!');
  return true;
};

const handleError = () => {
  ShowToast('error', 'Pengajar Gagal Dihapus!');
  return false;
};

export const requestDeletePengajar = async (id_pengajar: string) => {
  try {
    const alert = await Swal.fire({
      icon: 'warning',
      title: 'Apakah anda yakin?',
      text: 'Ingin menghapus data pengajar ini?',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      padding: '2em',
      customClass: 'sweet-alerts',
    });

    if (alert.isConfirmed) {
      await remove(id_pengajar);
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
