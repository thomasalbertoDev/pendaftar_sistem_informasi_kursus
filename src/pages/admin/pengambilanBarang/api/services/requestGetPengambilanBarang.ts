import { get } from '../api';

export const requestGetPengambilanBarang = async () => {
  try {
    const response = await get();
    const pengambilanBarang = response.data.data.map((item: any, index: number) => ({ ...item, index }));
    return pengambilanBarang;
  } catch (error) {
    console.log(error);
  }
};
