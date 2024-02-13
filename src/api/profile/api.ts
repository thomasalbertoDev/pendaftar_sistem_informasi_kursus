import API_FORM from '../../configs/API_FORM';
import API_JSON from '../../configs/API_JSON';

const URL = 'users';

export async function getProfileUser() {
  return await API_JSON.get(`/api/${URL}`);
}

export async function updateProfileUser(id_users: string, data: any) {
  return await API_FORM.put(`/api/${URL}/${id_users}`, data);
}
