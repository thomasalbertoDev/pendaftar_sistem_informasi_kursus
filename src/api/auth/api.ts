import API_JSON from '../../configs/API_JSON';

const URL = 'users';

export const login = (data: object) => {
  return API_JSON.post(`/api/${URL}/signin`, data);
};

export async function logout() {
  return await API_JSON.delete(`/api/${URL}/logout`);
}
