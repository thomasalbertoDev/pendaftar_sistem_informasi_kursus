import { get } from '../api';

export const requestGetAdmin = async () => {
  try {
    const response = await get();
    const admin = response.data;
    return admin;
  } catch (error) {
    console.log(error);
  }
};
