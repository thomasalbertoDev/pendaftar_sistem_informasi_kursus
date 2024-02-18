import API_JSON from '../../configs/API_JSON';

const URL = 'users';

export async function getAllUsers() {
  return await API_JSON.get(`/api/${URL}/all`);
}

export async function getUsersById(id_users: string) {
  return await API_JSON.get(`/api/${URL}/${id_users}`);
}
