import { getById } from '../api';

export const requestGetSatuanBarangByID = async (id_satuan_barang: string) => {
  try {
    const response = await getById(id_satuan_barang);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
