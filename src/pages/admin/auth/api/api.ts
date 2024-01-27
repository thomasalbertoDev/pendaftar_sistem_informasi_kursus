import API_JSON from '../../../../configs/API_JSON';

const URL = 'admin';

export async function login(data: any) {
  return await API_JSON.post(`/api/${URL}/login`, data);
}

export async function logout() {
  return await API_JSON.delete(`/api/${URL}/logout`);
}
