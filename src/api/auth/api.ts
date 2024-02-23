import API_JSON from '../../configs/API_JSON';

const URL = 'users';

export const login = (data: object) => {
  return API_JSON.post(`/api/${URL}/signin`, data);
};

export const register = (data: object) => {
  return API_JSON.post(`/api/${URL}/signup`, data);
};

export const verify = (data: object) => {
  return API_JSON.post(`/api/${URL}/verify`, data);
};

export async function logout() {
  return await API_JSON.delete(`/api/${URL}/logout`);
}
