import { getById } from '../api';

export const requestGetBarangByID = async (id_barang: string) => {
  try {
    const response = await getById(id_barang);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
