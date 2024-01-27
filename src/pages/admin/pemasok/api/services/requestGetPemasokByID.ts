import { getById } from '../api';

export const requestGetPemasokByID = async (id_pemasok: string) => {
  try {
    const response = await getById(id_pemasok);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
