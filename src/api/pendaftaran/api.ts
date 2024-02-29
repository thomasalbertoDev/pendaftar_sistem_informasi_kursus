import API_JSON from '../../configs/API_JSON';
import API_FORM from '../../configs/API_FORM';

const URL = 'pendaftaran';

export async function getByUser() {
  return await API_JSON.get(`/api/${URL}/user`);
}

export async function post(data: object) {
  return await API_FORM.post(`/api/${URL}`, data);
}

export async function getById(id_pendaftaran: string) {
  return await API_JSON.get(`/api/${URL}/${id_pendaftaran}`);
}

export async function put(id_pendaftaran: string, data: object) {
  return await API_FORM.put(`/api/${URL}/${id_pendaftaran}`, data);
}
