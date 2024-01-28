import { get } from '../api';

export const requestGetLaporanBarangMasuk = async () => {
  try {
    const response = await get();
    const laporanBarangMasuk = response.data.data.map((item: any, index: number) => ({ ...item, index }));
    return laporanBarangMasuk;
  } catch (error) {
    console.log(error);
  }
};
