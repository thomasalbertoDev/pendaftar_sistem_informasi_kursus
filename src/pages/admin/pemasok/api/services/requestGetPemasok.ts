import { get } from '../api';

export const requestGetPemasok = async () => {
  try {
    const response = await get();
    const pemasok = response.data.data.map((item: any, index: number) => ({ ...item, index }));
    return pemasok;
  } catch (error) {
    console.log(error);
  }
};
