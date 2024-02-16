import API_JSON from '../../configs/API_JSON';

const URL = 'sekolah';

export async function get() {
  return await API_JSON.get(`/api/${URL}`);
}

export async function getById(id_sekolah: string) {
  return await API_JSON.get(`/api/${URL}/${id_sekolah}`);
}

export async function post(data: object) {
  return await API_JSON.post(`/api/${URL}`, data);
}

export async function put(id_sekolah: string, data: object) {
  return await API_JSON.put(`/api/${URL}/${id_sekolah}`, data);
}

export async function remove(id_sekolah: string) {
  return await API_JSON.delete(`/api/${URL}/${id_sekolah}`);
}
