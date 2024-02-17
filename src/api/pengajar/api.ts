import API_JSON from '../../configs/API_JSON';
import API_FORM from '../../configs/API_FORM';

const URL = 'pengajar';

export async function get() {
  return await API_JSON.get(`/api/${URL}`);
}

export async function getById(id_pengajar: string) {
  return await API_JSON.get(`/api/${URL}/${id_pengajar}`);
}

export async function post(data: object) {
  return await API_FORM.post(`/api/${URL}`, data);
}

export async function put(id_pengajar: string, data: object) {
  return await API_FORM.put(`/api/${URL}/${id_pengajar}`, data);
}

export async function remove(id_pengajar: string) {
  return await API_JSON.delete(`/api/${URL}/${id_pengajar}`);
}
