import { get } from '../api';

export const requestGetPendidikan = async () => {
  try {
    const response = await get();
    const pendidikan = response?.data?.data.map((item: any, index: number) => ({ ...item, index }));
    return pendidikan;
  } catch (error) {
    console.log(error);
  }
};
