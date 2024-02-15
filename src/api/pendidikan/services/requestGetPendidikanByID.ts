import { getById } from '../api';

export const requestGetPendidikanByID = async (id_pendidikan: string) => {
  try {
    const response = await getById(id_pendidikan);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
