import { get } from '../api';

export const requestGetPekerjaan = async () => {
  try {
    const response = await get();
    const pekerjaan = response?.data?.data.map((item: any, index: number) => ({ ...item, index }));
    return pekerjaan;
  } catch (error) {
    console.log(error);
  }
};
