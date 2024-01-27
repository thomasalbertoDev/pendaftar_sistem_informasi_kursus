import { get } from '../api';

export const requestGetKaryawan = async () => {
  try {
    const response = await get();
    const karyawan = response.data.data.map((item: any, index: number) => ({ ...item, index }));
    return karyawan;
  } catch (error) {
    console.log(error);
  }
};
