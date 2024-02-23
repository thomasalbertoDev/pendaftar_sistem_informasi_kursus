import ShowToast from '../../../helpers/ShowToast';
import { register } from '../api';

interface Register {
  email: string;
  username: string;
  password: string;
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Berhasil Register , Silahkan Verifikasi Email Anda!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Gagal Register!');
  return false;
};

export const requestRegister = async (data: Register) => {
  try {
    const response = await register(data);
    if (response.status === 201) {
      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    return handleError();
  }
};
