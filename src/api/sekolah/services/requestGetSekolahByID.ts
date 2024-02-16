import { getById } from '../api';

export const requestGetSekolahByID = async (id_sekolah: string) => {
  try {
    const response = await getById(id_sekolah);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
