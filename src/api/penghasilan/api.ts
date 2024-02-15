import API_JSON from '../../configs/API_JSON';

const URL = 'penghasilan';

export async function get() {
  return await API_JSON.get(`/api/${URL}`);
}

export async function getById(id_penghasilan: string) {
  return await API_JSON.get(`/api/${URL}/${id_penghasilan}`);
}

export async function post(data: object) {
  return await API_JSON.post(`/api/${URL}`, data);
}

export async function put(id_penghasilan: string, data: object) {
  return await API_JSON.put(`/api/${URL}/${id_penghasilan}`, data);
}

export async function remove(id_penghasilan: string) {
  return await API_JSON.delete(`/api/${URL}/${id_penghasilan}`);
}
