import API_FORM from '../../configs/API_FORM';
import API_JSON from '../../configs/API_JSON';

const URL = 'kursus';

export async function get() {
  return await API_JSON.get(`/api/${URL}`);
}

export async function getById(id_kursus: string) {
  return await API_JSON.get(`/api/${URL}/${id_kursus}`);
}

export async function post(data: object) {
  return await API_FORM.post(`/api/${URL}`, data);
}

export async function put(id_kursus: string, data: object) {
  return await API_FORM.put(`/api/${URL}/${id_kursus}`, data);
}

export async function remove(id_kursus: string) {
  return await API_JSON.delete(`/api/${URL}/${id_kursus}`);
}
