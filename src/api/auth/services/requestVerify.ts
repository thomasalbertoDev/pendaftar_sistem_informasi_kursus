import ShowToast from '../../../helpers/ShowToast';
import { verify } from '../api';

interface Verify {
  email: string;
  otp: string;
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Email Anda Berhasil Di Verifikasi!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Gagal Verifikasi Email!');
  return false;
};

export const requestVerify = async (data: Verify) => {
  try {
    const response = await verify(data);
    if (response.status === 200) {
      return handleSuccess();
    }
    return handleSuccess();
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
