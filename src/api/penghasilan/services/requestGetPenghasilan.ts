import { get } from '../api';

export const requestGetPenghasilan = async () => {
  try {
    const response = await get();
    const penghasilan = response?.data?.data.map((item: any, index: number) => ({ ...item, index }));
    return penghasilan;
  } catch (error) {
    console.log(error);
  }
};
