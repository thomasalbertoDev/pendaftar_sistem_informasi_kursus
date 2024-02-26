import { getByUser } from '../api';

export const requestGetPendaftaran = async () => {
  try {
    const response: any = await getByUser();
    const pendaftaran = response?.data?.data;
    return pendaftaran;
  } catch (error) {
    console.log(error);
  }
};
