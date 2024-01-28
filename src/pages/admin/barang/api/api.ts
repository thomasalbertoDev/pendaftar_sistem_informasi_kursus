import API_FORM from '../../../../configs/API_FORM';
import API_JSON from '../../../../configs/API_JSON';

const URL = 'barang';

export async function get() {
  return await API_JSON.get(`/api/${URL}`);
}

export async function getById(id_barang: any) {
  return await API_JSON.get(`/api/${URL}/${id_barang}`);
}

export async function post(data: any) {
  return await API_FORM.post(`/api/${URL}`, data);
}

export async function put(id_barang: string, data: any) {
  return await API_FORM.put(`/api/${URL}/${id_barang}`, data);
}

export async function remove(id_barang: any) {
  return await API_JSON.delete(`/api/${URL}/${id_barang}`);
}
