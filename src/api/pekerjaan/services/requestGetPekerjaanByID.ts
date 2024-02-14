import { getById } from '../api';

export const requestGetPekerjaanByID = async (id_pekerjaan: string) => {
  try {
    const response = await getById(id_pekerjaan);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
