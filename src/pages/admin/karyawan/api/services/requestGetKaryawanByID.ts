import { getById } from '../api';

export const requestGetKaryawanByID = async (id_karyawan: string) => {
  try {
    const response = await getById(id_karyawan);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
