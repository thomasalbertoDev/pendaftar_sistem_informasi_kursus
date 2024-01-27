import { get } from '../api';

export const requestGetAgama = async () => {
  try {
    const response = await get();
    const agama = response.data.data.map((item: any, index: number) => ({ ...item, index }));
    return agama;
  } catch (error) {
    console.log(error);
  }
};
