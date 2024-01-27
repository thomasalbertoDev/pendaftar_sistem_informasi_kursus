import { getById } from '../api';

export const requestGetKategoriBarangByID = async (id_kategori_barang: string) => {
  try {
    const response = await getById(id_kategori_barang);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
