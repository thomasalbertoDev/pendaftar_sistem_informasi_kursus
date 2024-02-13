import { getProfileUser } from '../api';

export const requestGetProfilUser = async () => {
  try {
    const response = await getProfileUser();
    const user = response.data;
    return user;
  } catch (error) {
    console.log(error);
  }
};
