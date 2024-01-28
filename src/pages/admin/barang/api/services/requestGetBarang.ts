import { get } from '../api';

export const requestGetBarang = async () => {
  try {
    const response = await get();
    const barang = response.data.data.map((item: any, index: number) => ({ ...item, index }));
    return barang;
  } catch (error) {
    console.log(error);
  }
};
