import { getByUser } from '../api';

export const requestGetPembayaran = async () => {
  try {
    const response = await getByUser();
    const pembayaran = response?.data?.data;
    return pembayaran;
  } catch (error) {
    console.log(error);
  }
};
