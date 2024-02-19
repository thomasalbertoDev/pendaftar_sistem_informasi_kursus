import { login } from '../api';
import auth from '../../../configs/auth';
import ShowToast from '../../../helpers/ShowToast';

interface LoginResponse {
  status: number;
  token: string;
  username: string;
  nama: string;
  role: string;
}

const handleSuccess = (): boolean => {
  ShowToast('success', 'Selamat Datang!');
  return true;
};

const handleError = (): boolean => {
  ShowToast('error', 'Username Atau Password Salah!');
  return false;
};

export const requestLogin = async (username: string, password: string): Promise<boolean | undefined> => {
  try {
    const data = { username, password };
    const response = await login(data);

    if (response.status === 200) {
      const responseData: LoginResponse = response?.data?.data;
      const { token, username, nama, role } = responseData;

      auth.setToken(token);
      auth.setUsername(username);
      auth.setNama(nama);
      auth.setRole(role);

      return handleSuccess();
    }
  } catch (error) {
    console.log(error);
    if ((error as Error | any).response.status === 401) {
      return handleError();
    }
  }
};
