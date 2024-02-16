import { get } from '../api';

export const requestGetSekolah = async () => {
  try {
    const response = await get();
    const sekolah = response?.data?.data.map((item: any, index: number) => ({ ...item, index }));
    return sekolah;
  } catch (error) {
    console.log(error);
  }
};
