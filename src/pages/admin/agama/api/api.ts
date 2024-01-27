import API_JSON from '../../../../configs/API_JSON';

const URL = 'agama';

export async function get() {
  return await API_JSON.get(`/api/${URL}`);
}

export async function getById(id_agama: any) {
  return await API_JSON.get(`/api/${URL}/${id_agama}`);
}

export async function post(data: any) {
  return await API_JSON.post(`/api/${URL}`, data);
}

export async function put(id_agama: string, data: any) {
  return await API_JSON.put(`/api/${URL}/${id_agama}`, data);
}

export async function remove(id_agama: any) {
  return await API_JSON.delete(`/api/${URL}/${id_agama}`);
}
