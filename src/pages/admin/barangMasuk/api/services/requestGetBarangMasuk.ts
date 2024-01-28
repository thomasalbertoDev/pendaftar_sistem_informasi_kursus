import { get } from '../api';

export const requestGetBarangMasuk = async () => {
  try {
    const response = await get();
    const barangMasuk = response.data.data.map((item: any, index: number) => ({ ...item, index }));
    return barangMasuk;
  } catch (error) {
    console.log(error);
  }
};
