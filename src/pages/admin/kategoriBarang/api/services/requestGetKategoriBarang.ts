import { get } from '../api';

export const requestGetKategoriBarang = async () => {
  try {
    const response = await get();
    const kategoriBarang = response.data.data.map((item: any, index: number) => ({ ...item, index }));
    return kategoriBarang;
  } catch (error) {
    console.log(error);
  }
};
