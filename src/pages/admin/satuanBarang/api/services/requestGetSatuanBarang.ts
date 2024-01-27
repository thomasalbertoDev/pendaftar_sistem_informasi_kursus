import { get } from '../api';

export const requestGetSatuanBarang = async () => {
  try {
    const response = await get();
    const satuanBarang = response.data.data.map((item: any, index: number) => ({ ...item, index }));
    return satuanBarang;
  } catch (error) {
    console.log(error);
  }
};
