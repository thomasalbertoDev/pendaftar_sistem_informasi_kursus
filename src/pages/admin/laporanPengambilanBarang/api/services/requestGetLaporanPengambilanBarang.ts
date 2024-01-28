import { get } from '../api';

export const requestGetLaporanPengambilanBarang = async () => {
  try {
    const response = await get();
    const laporanPengambilanBarang = response.data.data.map((item: any, index: number) => ({ ...item, index }));
    return laporanPengambilanBarang;
  } catch (error) {
    console.log(error);
  }
};
