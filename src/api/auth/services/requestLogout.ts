import { logout } from '../api';
import auth from '../../../configs/auth';
import ShowToast from '../../../helpers/ShowToast';

const handleSuccess = (): boolean => {
  ShowToast('success', 'Berhasil Logout!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Gagal Logout!');
  return false;
};

export const requestLogout = async (): Promise<boolean | undefined> => {
  try {
    const response = await logout();
    if (response.status === 200) {
      auth.removeToken();
      auth.removeUsername();
      auth.removeNama();
      auth.removeRole();

      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    if ((error as Error | any).response.status === 401) {
      return handleError();
    }
  }
};
