import { getById } from '../api';

export const requestGetAgamaByID = async (id_agama: string) => {
  try {
    const response = await getById(id_agama);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
