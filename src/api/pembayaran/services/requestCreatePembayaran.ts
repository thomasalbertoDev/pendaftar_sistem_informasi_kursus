import { createPembayaran } from '../api';
import ShowToast from '../../../helpers/ShowToast';
import Swal from 'sweetalert2';

interface Pembayaran {
  id_pendaftaran: string;
  bukti_pembayaran: string;
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Bukti Pembayaran Berhasil Diupload!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Bukti Pembayaran Gagal Diupload!');
  return false;
};

export const requestCreatePembayaran = async (id_pendaftaran: string, data: Pembayaran) => {
  try {
    const alert = await Swal.fire({
      icon: 'warning',
      title: 'Apakah anda yakin?',
      text: 'Ingin bukti pembayaran ini sudah benar?',
      showCancelButton: true,
      confirmButtonText: 'Upload',
      padding: '2em',
      customClass: 'sweet-alerts',
    });

    if (alert.isConfirmed) {
      const response = await createPembayaran(id_pendaftaran, data);
      if (response.status === 201) {
        return handleSuccess();
      }
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
