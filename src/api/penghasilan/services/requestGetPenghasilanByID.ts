import { getById } from '../api';

export const requestGetPenghasilanByID = async (id_Penghasilan: string) => {
  try {
    const response = await getById(id_Penghasilan);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
